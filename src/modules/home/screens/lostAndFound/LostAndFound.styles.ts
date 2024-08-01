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
  height: 40px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .input {
    width: 375px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }

  .button {
    width: 260px;
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

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  position: fixed;
  width: 100%;
  height: 78px;
  left: 0;
  bottom: 0;
  padding: 20px 40px 20px 10px;
  flex-shrink: 0;

  background: #fff;
  box-shadow: 3px -1px 4px 0px rgba(0, 0, 0, 0.2);

  button {
    width: 360px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
`;

export const ContentCharts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  width: 100%;
  height: 100%;
  margin-bottom: 2rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    flex-basis: 30%;
    height: 100%;
  }

  > div:last-child {
    flex-basis: 70%;
    height: 100%;
  }
`;
