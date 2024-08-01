import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;

  p {
    color: var(--black-secondary);
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 26px;
    background: #838f9e;
    border-radius: 60px;
  }

  button p {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  button:active  {
    transform: scale(0.95);
  }
`;
