import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  width: 600px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 21px;
  padding: 24px;
  button {
    width: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-transform: capitalize;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Content = styled.div`
  display: flex;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;
  padding: 16px 16px;

  .input {
    border: 2px dashed rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
`;

export const Recused = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 30px;

  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 386px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    width: 100%;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 33px;

  input {
    width: auto;
  }

  textarea {
    max-width: 100%;
    padding: 1rem 2rem;
    background: #fff;
    color: var(--black-primary);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 78px;
    overflow: hidden;

    &:focus {
      outline: none;
      border-color: #9873ffc6;
    }
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
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 5px;
  }

  button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  button:active {
    opacity: 0.9;
    transform: scale(0.9);
    transition: all 0.8s;
  }

  .accept {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 80px;
    height: 26px;
    border-radius: 60px;
    background: #52379d;
  }

  .accept p {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  border-radius: 22px;
  background-color: #3fb5b4;
  padding: 6px 8px;

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const Withdrawn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
