import { useEffect, useRef, useState } from 'react';

import { collection, onSnapshot, doc, getFirestore } from 'firebase/firestore';
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

import avatar from 'assets/constants/Avatar8.png';

import { FilterSelectDataProps } from 'components/FilterSelect/models';
import { Chat, ChatUpdate, ChatUser, DataItemTableResidents, GetUserById, Message } from 'models';

import { useCreateChatRequest, useGetChatByUserIdRequest, useUpdateChatRequest } from 'api/chat';
import { useUploadImage } from 'api/uploadImage';
import { signDocumentUrl } from 'api/uploadImage/requests';
import { getUserRequest, useGetUserRequest } from 'api/user';

import useTranslations from 'i18n';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const useChat = () => {
  const t = useTranslations();
  const [searchValue, setSearchValue] = useState('');
  const [sendMessage, setSendMessage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [userSelected, setUserSelected] = useState<GetUserById | undefined>(undefined);
  const session = useAppSelector(selectUser);
  const [data, setData] = useState<Chat[]>([]);
  const { data: chats } = useGetChatByUserIdRequest(session?.user?.id, !!session?.user.id);
  const error = null;
  const { data: user } = useGetUserRequest(
    selectedChat?.users?.filter((userChat: ChatUser) => userChat.id !== session.user.id)[0].id ?? '',
    !!selectedChat?.users?.filter((userChat: ChatUser) => userChat.id !== session.user.id)[0].id
  );

  const [openDocumentModal, setOpenDocumentModal] = useState(false);
  const [file, setFile] = useState<any>(null);
  const database = getFirestore();
  const [newMessage, setNewMessage] = useState<string>('');
  const { mutateAsync } = useUpdateChatRequest();
  const { mutateAsync: createChat } = useCreateChatRequest();
  const filteredData = null;
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<any>(null);
  const [openResidentModal, setOpenResidentModal] = useState(false);
  const { mutateAsync: uploadImage } = useUploadImage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [filters, setFilters] = useState<FilterSelectDataProps[]>([
    {
      value: 'all',
      name: t('all'),
    },
  ]);
  const [filterSelected, setFilterSelected] = useState('');
  const [respondMessage, setRespondMessage] = useState<Message | null>(null);

  const onChangeFilter = (item: FilterSelectDataProps) => {
    setFilterSelected(item.value);

    if (item.value === 'all') return setData(chats as Chat[]);
    setData(chats?.filter(chat => chat.users.some(user => user.role === item.value)) as Chat[]);
  };

  const handleChatClick = async (chatId: string) => {
    const chatSelected = data?.find(chat => chat?.id === chatId);

    if (chatSelected) {
      const userSele = await getUserRequest(
        chatSelected?.users?.filter((user: ChatUser) => user.id !== session.user.id)[0].id ?? ''
      );
      setUserSelected(userSele);
      setSelectedChat(chatSelected);
    }
  };

  const handleSendChange = (value: string) => {
    setSendMessage(value);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);

    const filteredList = chats?.filter(chat =>
      chat.users.some(user => user.name.toLowerCase().includes(value.toLowerCase()))
    );

    setData(filteredList ?? []);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const getSentAt = (sentAt: any) => {
    if (typeof sentAt === 'string') {
      return moment(sentAt).format('HH:mm');
    }

    const milliseconds = sentAt.seconds * 1000 + sentAt.nanoseconds / 1000000;

    return moment(milliseconds).format('HH:mm');
  };

  const isMessageReceive = (message: Message) => {
    return message.sent_by_id !== session.user?.id;
  };

  useEffect(() => {
    if (selectedChat?.id) {
      const chatCollectionRef = collection(database, 'chats');

      const chatDocRef = doc(chatCollectionRef, selectedChat?.id);
      const unsubscribe = onSnapshot(
        chatDocRef,
        docSnapshot => {
          if (docSnapshot.exists()) {
            const chatData = docSnapshot.data();
            setMessages(chatData.messages || []);
          } else {
            setMessages([]);
          }
        },
        error => {
          console.error('Erro ao obter dados do chat:', error);
          setMessages([]);
        }
      );
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current?.scrollHeight;
      }

      return () => unsubscribe();
    }
  }, [selectedChat]);

  useEffect(() => {
    if (messages) {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    setUserSelected(user);
  }, [user]);

  useEffect(() => {
    if (chats && chats.length > 0) {
      const roles: FilterSelectDataProps[] = [];
      chats.forEach(chat =>
        chat.users.forEach(user =>
          roles.push({
            value: user.role,
            name: t(user.role),
          })
        )
      );
      roles.unshift({
        value: 'all',
        name: t('all'),
      });
      const uniqueRoles = Array.from(new Set(roles.map(role => role.value))).map(
        value => roles.find(role => role.value === value)!
      );
      setFilters(uniqueRoles);
    }
  }, [chats]);

  useEffect(() => {
    if (chats && chats.length > 0) {
      setData(chats);
    }
  }, [chats]);

  const onSend = async () => {
    if (file) newMessageFile();

    if (!newMessage) return;

    const dataRequest: ChatUpdate = {
      id: selectedChat?.id ?? '',
      actions: '',
      users: selectedChat?.users ?? [],
      user_ids: selectedChat?.user_ids ?? [],
      messages: {
        message: newMessage,
        id: uuidv4(),
        sent_by_id: session.user?.id ?? '',
        content_type: 'application/message',
        is_forwarded: false,
        is_read: false,
        parent: respondMessage ? respondMessage.id : '',
        sent_at: new Date(),
        sent_by_role: user?.role ?? 'condominium',
      },
    };

    try {
      await mutateAsync(dataRequest);
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
      onCleandTextAndFile();
    } catch (error) {
      console.log('error', error);
    }
  };

  const newMessageFile = async () => {
    const uploadImageArray = async (): Promise<string> => {
      const responseUploadImage = await uploadImage({
        file: file,
        type: 'CHAT',
      });
      const image = await responseUploadImage.json();
      return image.url;
    };

    const dataRequest: ChatUpdate = {
      id: selectedChat?.id ?? '',
      actions: '',
      users: selectedChat?.users ?? [],
      user_ids: selectedChat?.user_ids ?? [],
      messages: {
        message: await uploadImageArray(),
        id: uuidv4(),
        sent_by_id: session.user?.id ?? '',
        content_type: 'application/image',
        is_forwarded: false,
        is_read: false,
        parent: respondMessage ? respondMessage.id : '',
        sent_at: new Date(),
        sent_by_role: 'user',
      },
    };

    try {
      await mutateAsync(dataRequest);
      onCleandTextAndFile();
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const userPicure = userSelected?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url;
  const profilePicure = session?.user?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url;

  const onSelectedResident = async (userSelected: DataItemTableResidents) => {
    const dataRequest: Chat = {
      actions: '',
      users: [
        {
          id: session.user?.id,
          role: session.user?.role,
          name: session.user?.name,
          profile_pic: '',
        },
        {
          id: userSelected.id,
          role: userSelected.role,
          name: userSelected.name,
          profile_pic: '',
        },
      ],
      user_ids: [session.user?.id, userSelected.id],
      messages: [],
    };

    try {
      const response = await createChat(dataRequest);
      const responseJson = await response.json();
      // refetchChats();
      setSelectedChat(responseJson);
    } catch (error) {
      console.log('error', error);
    }
    setOpenResidentModal(false);
  };

  const getNameUsersOnChat = (chat: Chat) => {
    if (!chat) return '';

    return chat?.users
      ?.filter((user: ChatUser) => user.id !== session?.user.id)
      .map((user: ChatUser, index: number, chatFilter: ChatUser[]) => {
        if (chatFilter.length > 0) {
          if (index === 0) {
            return `${user.name}`;
          }
          return `, ${user.name}`;
        }
      });
  };

  const getTimeLastMessage = (chat: Chat) => {
    if (chat?.messages && chat?.messages?.length > 0) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      const sentAt = moment(lastMessage.sent_at).toISOString();
      const dateSentAt = moment(sentAt);
      const dateToday = moment();

      const diffDates = dateToday.diff(dateSentAt);

      const minutes = Math.floor(diffDates / (1000 * 60));
      const hours = Math.floor(diffDates / (1000 * 60 * 60));
      const days = Math.floor(diffDates / (1000 * 60 * 60 * 24));
      const month = Math.floor(diffDates / (1000 * 60 * 60 * 24 * 30));

      if (month > 0) {
        return `${month} m`;
      } else if (days > 0) {
        return `${days} ${t('days')}`;
      } else if (hours > 0) {
        return `${hours} h`;
      } else if (minutes > 0) {
        return `${minutes} min`;
      } else {
        return `${1} ${t('minutes')}`;
      }
    }
    return '';
  };

  const getAvatarImage = (chat: Chat) => {
    const firstUser = chat?.users?.filter((user: ChatUser) => user.id !== session?.user.id)[0];

    if (firstUser?.profile_pic) {
      return firstUser?.profile_pic;
    }

    return avatar;
  };

  const onOpenDocuments = () => {
    setOpenDocumentModal(true);
  };

  const onOpenEmoji = () => {};

  const onSelecDocument = (file: any) => {
    setFile(file);
  };

  const onCleandTextAndFile = () => {
    setFile(null);
    setNewMessage('');
    setRespondMessage(null);
  };

  const getChatImageOrDocumentSigned = async (url: string) => {
    const response = await signDocumentUrl(url);
    try {
      const responseJson = await response.json();
      return responseJson.url;
    } catch (error) {
      console.log('error', error);
    }
    return undefined;
  };

  const onRespondMessage = (menssageReceive: Message) => {
    setRespondMessage(menssageReceive);
  };

  return {
    data,
    error,
    filters,
    filterSelected,
    isLoading,
    searchValue,
    sendMessage,
    selectedChat,
    filteredData,
    userSelected,
    newMessage,
    profilePicure,
    userPicure,
    messages,
    chatRef,
    openResidentModal,
    session,
    openDocumentModal,
    file,
    open,
    anchorEl,
    respondMessage,
    setRespondMessage,
    handleClick,
    handleClose,
    setOpenResidentModal,
    setNewMessage,
    onSend,
    setSelectedChat,
    handleChatClick,
    handleSendChange,
    handleSearchChange,
    getSentAt,
    isMessageReceive,
    onSelectedResident,
    onChangeFilter,
    getNameUsersOnChat,
    getTimeLastMessage,
    getAvatarImage,
    onOpenDocuments,
    onOpenEmoji,
    setOpenDocumentModal,
    onSelecDocument,
    setFile,
    onCleandTextAndFile,
    getChatImageOrDocumentSigned,
    onRespondMessage,
    t,
  };
};
