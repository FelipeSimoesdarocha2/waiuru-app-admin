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
  gap: 30px;
  padding: 30px 30px 40px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 723px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    color: var(--black-primary);
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  button {
    width: auto;
    height: 37px;
  }

  .close {
    color: #52379d;
  }

  .close,
  button p {
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }
`;

export const Recused = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 500px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    width: auto;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;

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
`;
