import Image from 'next/image';

import exit from 'assets/icons/exit.svg';
import menu from 'assets/icons/menu.svg';
import notFound from 'assets/images/404.png';
import cuate from 'assets/images/cuate.png';

import * as S from './Chat.styles';

import { Message } from 'models';

import { Title } from '@waiuru/waiuru-ui';

import { FilterSelect } from 'components/FilterSelect';
import { Input } from 'components/input';
import { ListResidentModal } from 'components/listResidentModal';
import { PhotoOrDocument } from 'components/photoOrDocument';
import { TextareaChat } from 'components/textareaChat';

import { ChatNotFound, ChatWithout } from './components';
import MessageComponentReceived from './components/MessageComponentReceived';
import MessageComponentSend from './components/MessageComponentSend';

import { useChat } from './useChat';

const ChatScreen = () => {
  const {
    data,
    error,
    searchValue,
    selectedChat,
    userSelected,
    profilePicure,
    newMessage,
    messages,
    chatRef,
    openResidentModal,
    filterSelected,
    filters,
    openDocumentModal,
    file,
    respondMessage,
    setRespondMessage,
    setNewMessage,
    setSelectedChat,
    handleChatClick,
    handleSearchChange,
    isMessageReceive,
    onSend,
    setOpenResidentModal,
    onSelectedResident,
    onChangeFilter,
    getNameUsersOnChat,
    getTimeLastMessage,
    getAvatarImage,
    onOpenDocuments,
    onOpenEmoji,
    setOpenDocumentModal,
    onSelecDocument,
    onCleandTextAndFile,
    onRespondMessage,
    t,
  } = useChat();

  return (
    <S.Container>
      <section>
        <S.ChatHeader>
          <div>
            <Title name={t('messages')} size={'18px'} />
            <p>{data?.length}</p>
          </div>
          <p
            className="initChat"
            onClick={() => {
              setOpenResidentModal(true);
            }}
          >
            {t('init-chat')}
          </p>
          <Input.Search
            key="name"
            id="name"
            type="text"
            data-testid="name"
            placeholder={t('search')}
            value={searchValue}
            onChange={handleSearchChange}
          />
          <FilterSelect data={filters ?? []} onChange={onChangeFilter} selected={filterSelected} />
        </S.ChatHeader>
        <S.ChatGroup>
          {data?.map(chat => (
            <div
              key={chat.id}
              onClick={async () => {
                await handleChatClick(chat?.id ?? '');
              }}
              id={selectedChat?.id === chat.id ? 'selected' : ''}
            >
              <S.AvatarContainer>
                <Image width={30} height={30} src={getAvatarImage(chat)} alt={'Chat'} />
              </S.AvatarContainer>
              <div>
                <div>
                  <S.UserChatName>{getNameUsersOnChat(chat)}</S.UserChatName>
                  <p>{getTimeLastMessage(chat)}</p>
                </div>
                <div>
                  <p>
                    {chat.messages && chat.messages.length > 0
                      ? chat.messages[chat.messages.length - 1].message
                      : t('no-message')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </S.ChatGroup>
      </section>
      <section>
        {selectedChat ? (
          <>
            {!error ? (
              <S.Chat>
                <div>
                  <Title name={userSelected?.name ?? ''} size={'18px'} />
                  <figure>
                    <Image src={menu} alt="vector" />
                    <Image
                      src={exit}
                      alt="vector"
                      onClick={() => {
                        setSelectedChat(null);
                      }}
                    />
                  </figure>
                </div>
                <S.MessageWrapperReceive ref={chatRef}>
                  {messages.map((message: Message, _: number, allMessages: Message[]) => {
                    if (isMessageReceive(message)) {
                      return (
                        <MessageComponentReceived
                          key={message.id}
                          message={message}
                          profilePicure={profilePicure}
                          allMessages={allMessages}
                          onRespondMessage={onRespondMessage}
                        />
                      );
                    }
                    return (
                      <MessageComponentSend
                        key={message.id}
                        message={message}
                        profilePicure={profilePicure}
                        allMessages={allMessages}
                      />
                    );
                  })}
                </S.MessageWrapperReceive>
                <div>
                  <TextareaChat
                    id="name"
                    type="chat"
                    file={file}
                    value={newMessage}
                    placeholder={t('write-message')}
                    respondMessage={respondMessage}
                    onSend={onSend}
                    onOpenEmoji={onOpenEmoji}
                    onChange={setNewMessage}
                    onOpenDocuments={onOpenDocuments}
                    setRespondMessage={setRespondMessage}
                    onCleandTextAndFile={onCleandTextAndFile}
                  />
                </div>
              </S.Chat>
            ) : (
              <ChatNotFound name={t('an-error-has-occurred')} src={notFound} />
            )}
          </>
        ) : (
          <ChatWithout src={cuate} name="Chat Waiuru" />
        )}
        {openResidentModal && (
          <ListResidentModal
            title={t('resident-list')}
            onClose={() => {
              setOpenResidentModal(false);
            }}
            onSelect={user => {
              onSelectedResident(user);
            }}
          />
        )}
        {openDocumentModal && (
          <PhotoOrDocument
            onClose={() => {
              setOpenDocumentModal(false);
            }}
            onSelectDocument={file => {
              onSelecDocument(file);
            }}
          />
        )}
      </section>
    </S.Container>
  );
};

export default ChatScreen;
