import Image from 'next/image';

import React, { useState, useEffect } from 'react';

import avatar from 'assets/constants/Avatar8.png';

import * as S from '../Chat.styles'; // Certifique-se de ajustar o caminho para os seus styled components

import { Message } from 'models';

import { signDocumentUrl } from 'api/uploadImage/requests';

import { ShowDocument } from 'components/showDocument';

import { useChat } from '../useChat';

const MessageComponentSend = ({
  message,
  profilePicure,
  allMessages,
}: {
  message: Message;
  profilePicure: string | undefined;
  allMessages: Message[];
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlMessageRespond, setImageUrlMessageRespond] = useState(null);
  const [openModalFile, setOpenModalFile] = useState(false);
  const [messageRespond, setMessageRespond] = useState<Message | null | undefined>(null);
  const isMessageRespond = message.parent && message.parent.length > 0;
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
        <S.MessageWrapper key={message.message}>
          <S.MessageContainer key={message.message}>
            <S.ContainerMessage>
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
              <S.Message>{message.message}</S.Message>
              <S.Time>{getSentAt(message.sent_at)}</S.Time>
            </S.ContainerMessage>
            <S.MessageFigure>
              <Image
                src={profilePicure ?? avatar}
                alt="profile Picure"
                className="avatar"
                width={40}
                height={40}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </S.MessageFigure>
          </S.MessageContainer>
        </S.MessageWrapper>
      </>
    );
  }

  if (message.content_type === 'application/image') {
    return (
      <S.MessageContainer key={message.message}>
        <S.ContainerMessage>
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

          {imageUrl ? (
            <S.ImageContainerMessage onClick={() => setOpenModalFile(!openModalFile)}>
              <Image width={250} height={250} src={imageUrl} alt="Chat" />
            </S.ImageContainerMessage>
          ) : (
            <S.Message>{message.message}</S.Message>
          )}
          <S.Time>{getSentAt(message.sent_at)}</S.Time>
        </S.ContainerMessage>
        <S.MessageFigure>
          <Image
            src={profilePicure ?? avatar}
            alt="profile Picure"
            className="avatar"
            width={40}
            height={40}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
          {openModalFile && (
            <ShowDocument
              onClose={() => {
                setOpenModalFile(false);
              }}
              url={imageUrl}
            />
          )}
        </S.MessageFigure>
      </S.MessageContainer>
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

export default MessageComponentSend;
