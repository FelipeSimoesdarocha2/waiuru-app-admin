import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
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
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  position: fixed;
  width: 100%;
  height: 78px;
  bottom: 0;
  left: 0;

  flex-shrink: 0;
  padding: 20px 40px 20px 10px;

  background: #fff;
  box-shadow: 3px -1px 4px 0px rgba(0, 0, 0, 0.2);

  button {
    width: 360px;
  }
`;
