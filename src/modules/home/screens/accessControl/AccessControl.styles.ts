import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 32px 0 32px;

  @media (max-width: 1100px) {
    padding: 32px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
  width: 100%;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    & > :nth-child(1) {
      width: 100%;
      max-width: 150px;
    }

    & > :nth-child(2) > div {
      width: 100%;
    }
  }

  & > div:nth-child(2) > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 18px;

    button:nth-child(1) {
    }

    button:nth-child(2) {
      max-width: 260px;
      min-width: 260px;
      padding: 8px 22px;
      gap: 8px;

      p {
        font-size: 14px;
        min-width: auto;
      }
    }
  }

  @media (max-width: 1100px) {
    gap: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 0 32px;
`;
