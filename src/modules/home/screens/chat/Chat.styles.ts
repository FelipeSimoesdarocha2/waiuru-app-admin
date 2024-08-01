import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  & > section:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    width: 333px;
    padding: 32px 0px 0px;

    background-color: var(--white);
    border-right: 1px solid #e9ebf1;
  }

  & > section:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: var(--white);
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  position: relative;
  width: 333px;
  padding: 0 2rem;

  .initChat {
    color: #52379d;
    font-weight: 600;
    cursor: pointer;
  }

  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    p {
      line-height: 150%;
    }
  }
`;

export const ChatGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  position: relative;
  overflow-y: auto;
  width: 333px;

  ::-webkit-scrollbar {
    display: none;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px;

    position: relative;
    width: 333px;

    figure {
      padding: 10px 0px;
      width: 30px;
      height: 90px;

      span {
        position: absolute;
        left: 10px;
        top: 30px;

        border-radius: 20px;
        background: #52379d;
        z-index: 1;

        width: 8px;
        height: 8px;
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      height: 90px;

      padding: 10px;
      isolation: isolate;

      & > div:nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 230px;
        height: 24px;
      }

      & > div p:nth-child(1) {
        font-weight: 700;
        line-height: 150%;
        font-size: 14px;
        color: var(--black-primary);
      }

      & > div p:nth-child(2) {
        font-weight: 700;
        line-height: 150%;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
      }

      & > div:nth-child(2) p {
        font-weight: 600;
        line-height: 150%;
        font-size: 14px;
        color: var(--black-secondary);
        text-align: justify;

        overflow: hidden;

        width: 230px;
        height: 42px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        text-overflow: ellipsis;
      }
    }
  }

  & > div:hover {
    cursor: pointer;
  }

  @keyframes slide {
    0% {
      background-position: 200% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

  #selected {
    background: linear-gradient(to left, #f5f5fa, #f1f1fa);
    background-size: 200% 100%;
    animation: slide 1s ease-in-out;
    border-right: #52379d 2px solid;
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 100%;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    padding: 2rem 26px;
    border-bottom: 1px solid #e9ebf1;
  }

  & > div:nth-child(1) > figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    margin-right: 2rem;
  }

  & > div:nth-child(1) > figure img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  /* & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem 26px;

    overflow-y: auto;
  }

  & > div:nth-child(2) > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;

    text-align: center;
    color: var(--black-secondary);
  }

  & > div:nth-child(2) > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }

  & > div:nth-child(2) > div figure img {
    width: 40px;
    height: 40px;
  }

  & > div:nth-child(2) > div div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    max-width: 430px;
    padding: 16px;

    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }

  & > div:nth-child(2) > div div p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: var(--black-primary);
  }

  & > div:nth-child(3) {
    padding: 2rem 26px;
  } */
`;

export const MessageWrapperReceive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 26px;

  overflow-y: auto;
`;
export const MessageTitleReceive = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  text-align: center;
  color: var(--black-secondary);
`;
export const MessageContainerReceive = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`;
export const MessageFigureReceive = styled.figure`
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ContainerReceive = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px 16px;

  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const ContainerMessageReceive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 430px;
`;

export const MessageReceive = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: var(--black-primary);
`;

export const TimeReceive = styled.p`
  font-size: 10px;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: var(--black-primary);
`;
export const MessageTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  text-align: center;
  color: var(--black-secondary);
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-end;
  gap: 2rem;
  max-width: 430px;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-end;
  gap: 2rem;
`;

export const MessageFigure = styled.figure`
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  max-width: 430px;
  padding: 16px;
  background-color: #f4f3f9;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const Message = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: var(--black-primary);
`;

export const Time = styled.p`
  font-size: 10px;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: var(--black-primary);
  align-self: flex-end;
`;

export const UserChatName = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100px;
`;

export const AvatarContainer = styled.div`
  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 40px;
  }
`;

export const ImageContainerMessage = styled.div`
  cursor: pointer;
`;

export const MessageRespond = styled.div`
  padding: 8px;
  border-radius: 10px;
  background-color: #c3b3d7;
  width: 100%;
`;

export const MessageRespondText = styled.div``;
