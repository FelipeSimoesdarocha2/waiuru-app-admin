import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 46px;
`;

export const UpDocument = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 100%;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  & > div:first-child > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 16px;
    align-self: stretch;
  }

  & > div:first-child > div p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  }

  & > div:first-child > div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 36px;

    background: #838f9e;
    border-radius: 60px;
  }

  & > div:first-child > div button p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
  }

  & > div:last-child p {
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
  }
`;

export const ToDocument = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: 100%;

  & > div {
    margin: 0 90px;
  }

  @media (max-width: 1100px) {
    margin: 2rem;
  }

  .header {
    display: flex;
    flex-direction: column;

    padding: 0 10px;
    border: 1px solid #e9ebf1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .header_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    position: relative;
    height: 70px;

    padding: 0 20px;
    border-bottom: 1px solid #e9ebf1;
  }

  .custonStyleInput {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    width: 40%;
  }

  .header_top div:first-child {
    margin: 0;
    border-radius: 6px;
  }

  .editIcon {
    position: absolute;
    left: auto;
    right: 20px;
  }

  .document_category {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .header_botton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2.5rem;

    padding: 8px 10px;
    height: 70px;
    width: 100%;
  }

  button:first-child p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }

  button:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 182px;
    height: 40px;

    background: #52379d;
    border-radius: 60px;
  }

  button:last-child p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  textarea {
    min-width: 100%;
    max-width: 100%;

    border-radius: 0px 0px 4px 4px;
    border: 1px solid #e9ebf1;
    background: #fff;

    padding: 2rem;
    font-size: 14px;

    color: var(--black-primary);
    line-height: 150%;
    letter-spacing: 0.15px;

    &:focus {
      outline: none;
      border-color: #9873ffc6;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(63, 67, 80, 0.24);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(63, 67, 80, 0.32);
    }
  }
`;
