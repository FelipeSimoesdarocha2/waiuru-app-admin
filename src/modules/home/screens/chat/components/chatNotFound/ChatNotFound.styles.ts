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
  justify-content: center;

  gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px;
    gap: 16px;
  }

  p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 26px;

    border-radius: 60px;
    background: #838f9e;
  }

  button p {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
`;
