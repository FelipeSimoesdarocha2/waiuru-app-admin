import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 36px 45px 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1100px) {
    padding: 32px;
  }

  h2 {
    width: fit-content;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Tabs = styled.div`
  display: flex;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  width: 100%;
  height: 100%;
  padding: 24px 0 15px;
  border-radius: 6px;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

export const Componente_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
  overflow: hidden;
  border-radius: 50%;

  img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0 16px;

  .input {
    border-radius: 4px;
    border: 1px dashed rgba(0, 0, 0, 0.3);
  }
`;

export const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 44px;

  .bnt {
    max-width: 360px;
  }
`;
