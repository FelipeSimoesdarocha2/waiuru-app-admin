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
  flex-direction: column;
  gap: 18px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
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
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  padding: 20px 40px 20px 10px;

  background: #fff;
  box-shadow: 3px -1px 4px 0px rgba(0, 0, 0, 0.2);

  button {
    width: 360px;
  }
`;
