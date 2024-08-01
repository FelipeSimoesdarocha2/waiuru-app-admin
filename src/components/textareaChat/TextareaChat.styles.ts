import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: 100%;
  gap: 10px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  min-height: 72px;

  &.focused {
    border-color: #9873ffc6;
    box-shadow: 0px 0px 3px #9873ff;
    transition: all 200ms;
  }

  textarea {
    background-color: transparent;
    padding: 10px;
    font-size: 14px;

    color: var(--black-secondary);
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  textarea {
    resize: none;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0 1rem;
  }

  & > div figure {
    cursor: pointer;
  }

  & > div div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 26px;

    border-radius: 60px;
    background: #52379d;
  }

  & > div div button p {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const ContainerFile = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

export const CloseButton = styled.div`
  padding: 10px 20px;
  width: fit-content;
`;

export const ImageComponent = styled.div`
  -webkit--shadow: 0px 0px 4px 2px rgba(152, 115, 255, 0.4);
  -moz-box-shadow: 0px 0px 4px 2px rgba(152, 115, 255, 0.4);
  box-shadow: 0px 0px 4px 2px rgba(152, 115, 255, 0.4);
  width: fit-content;
  border-radius: 8px;
`;

export const ComponentFile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: 100%;
  gap: 10px;

  border-radius: 8px;
  min-height: 72px;
  margin-bottom: 20px;

  &.focused {
    border-color: #9873ffc6;
    box-shadow: 0px 0px 3px #9873ff;
    transition: all 200ms;
  }

  textarea {
    background-color: transparent;
    padding: 10px;
    font-size: 14px;

    color: var(--black-secondary);
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  textarea {
    resize: none;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0 1rem;
  }

  & > div figure {
    cursor: pointer;
  }

  & > div div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 26px;

    border-radius: 60px;
    background: #52379d;
  }

  & > div div button p {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Spacer = styled.div`
  height: 10px;
`;

export const CleanButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 26px;

  border-radius: 60px;
  border-width: 1px;
  border: 1px solid #52379d;
  background: transparent;
  cursor: pointer;
`;

export const ContainerMessageRespond = styled.div`
  background-color: #f4f3f9;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: var(--black-primary);
`;

export const ContainerRespond = styled.div`
  position: relative;
  width: 100%;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  min-height: 72px;
`;
