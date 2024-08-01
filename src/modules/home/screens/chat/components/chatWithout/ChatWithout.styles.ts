import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
    gap: 16px;

    padding: 16px;
  }

  & > div h2 {
    font-size: 20px;
    line-height: 150%;

    text-align: center;
    color: var(--black-secondary);
  }

  & > div p {
    width: 420px;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;

    text-align: center;
    color: var(--black-secondary);
  }
`;
