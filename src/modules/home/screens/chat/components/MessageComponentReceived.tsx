import Image from 'next/image';

import React, { useState, useEffect } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import avatar from 'assets/constants/Avatar8.png';

import * as S from '../Chat.styles'; // Certifique-se de ajustar o caminho para os seus styled components

import { Message } from 'models';

import { signDocumentUrl } from 'api/uploadImage/requests';

import { useChat } from '../useChat';

import { IconButton } from '@mui/material';

const MessageComponentReceived = ({
  message,
  profilePicure,
  allMessages,
  onRespondMessage,
}: {
  message: Message;
  profilePicure: string | undefined;
  allMessages: Message[];
  onRespondMessage: (message: Message) => void;
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [openModalFile, setOpenModalFile] = useState(false);
  const [messageRespond, setMessageRespond] = useState<Message | null | undefined>(null);
  const isMessageRespond = message.parent && message.parent.length > 0;
  const [imageUrlMessageRespond, setImageUrlMessageRespond] = useState(null);
  const { getSentAt } = useChat();

  useEffect(() => {
    if (message.content_type === 'application/image') {
      const fetchImageUrl = async () => {
        const srcT = await getChatImageOrDocumentSigned(message.message);
        setImageUrl(srcT);
      };
      fetchImageUrl();
    }
  }, [message]);

  useEffect(() => {
    if (isMessageRespond && allMessages && allMessages.length > 0) {
      setMessageRespond(allMessages.find(m => m.id === message.parent));
    }
  }, []);

  const isMessageImage = (messageToTest: Message) => {
    return messageToTest.content_type === 'application/image';
  };

  const onClickToRespond = () => {
    if (isMessageImage(message)) {
      message.message = imageUrl ?? '';
    }
    onRespondMessage(message);
  };

  useEffect(() => {
    if (messageRespond?.content_type === 'application/image') {
      const fetchImageUrl = async () => {
        const srcT = await getChatImageOrDocumentSigned(messageRespond.message);
        setImageUrlMessageRespond(srcT);
      };
      fetchImageUrl();
    }
  }, [messageRespond]);

  if (message.content_type === 'application/message') {
    return (
      <>
        <div key={message.id}>
          <S.MessageContainerReceive>
            <S.MessageFigureReceive>
              <Image
                src={profilePicure ?? avatar}
                alt={'user Picure'}
                className="avatar"
                width={40}
                height={40}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </S.MessageFigureReceive>
            <S.ContainerReceive>
              <S.ContainerMessageReceive>
                {/* {isMessageRespond && (
                  <S.MessageRespond>
                    <S.MessageRespondText>{messageRespond?.message}</S.MessageRespondText>
                  </S.MessageRespond>
                )} */}
                {imageUrlMessageRespond && isMessageRespond ? (
                  <S.MessageRespond>
                    <S.ImageContainerMessage onClick={() => setOpenModalFile(!openModalFile)}>
                      <Image width={250} height={250} src={imageUrlMessageRespond} alt="Chat" />
                    </S.ImageContainerMessage>
                  </S.MessageRespond>
                ) : (
                  isMessageRespond && (
                    <S.MessageRespond>
                      <S.MessageRespondText>{messageRespond?.message}</S.MessageRespondText>
                    </S.MessageRespond>
                  )
                )}
                <S.MessageReceive>{message.message}</S.MessageReceive>
                <S.TimeReceive>{getSentAt(message.sent_at)}</S.TimeReceive>
              </S.ContainerMessageReceive>
              <IconButton aria-label="delete" color="primary" onClick={() => onClickToRespond()}>
                <ArrowForwardIosIcon />
              </IconButton>
            </S.ContainerReceive>
          </S.MessageContainerReceive>
        </div>
      </>
    );
  }

  if (message.content_type === 'application/image') {
    return (
      <div key={message.id}>
        <S.MessageContainerReceive>
          <S.MessageFigureReceive>
            <Image
              src={profilePicure ?? avatar}
              alt={'user Picure'}
              className="avatar"
              width={40}
              height={40}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </S.MessageFigureReceive>
          <S.ContainerReceive>
            <S.ContainerMessageReceive>
              {imageUrlMessageRespond && isMessageRespond ? (
                <S.MessageRespond>
                  <S.ImageContainerMessage onClick={() => setOpenModalFile(!openModalFile)}>
                    <Image width={250} height={250} src={imageUrlMessageRespond} alt="Chat" />
                  </S.ImageContainerMessage>
                </S.MessageRespond>
              ) : (
                isMessageRespond && (
                  <S.MessageRespond>
                    <S.MessageRespondText>{messageRespond?.message}</S.MessageRespondText>
                  </S.MessageRespond>
                )
              )}
              {/* {isMessageRespond && (
                <S.MessageRespond>
                  <S.MessageRespondText>{messageRespond?.message}</S.MessageRespondText>
                </S.MessageRespond>
              )} */}
              {imageUrl ? (
                <S.ImageContainerMessage onClick={() => setOpenModalFile(!openModalFile)}>
                  <Image width={250} height={250} src={imageUrl} alt="Chat" />
                </S.ImageContainerMessage>
              ) : (
                <S.Message>{message.message}</S.Message>
              )}
              <S.TimeReceive>{getSentAt(message.sent_at)}</S.TimeReceive>
            </S.ContainerMessageReceive>
            <IconButton aria-label="delete" color="primary" onClick={() => onClickToRespond()}>
              <ArrowForwardIosIcon />
            </IconButton>
          </S.ContainerReceive>
        </S.MessageContainerReceive>
      </div>
    );
  }

  return null;
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

export default MessageComponentReceived;
