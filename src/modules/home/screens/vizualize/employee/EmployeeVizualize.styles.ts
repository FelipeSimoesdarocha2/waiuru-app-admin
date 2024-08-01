import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  height: 100%;
`;

export const Spacing = styled.div`
  padding: 21px 0 4px;
`;

export const UserManagement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 90px;
  width: 100%;
  height: 100%;
  max-height: 168px;
  padding: 0 60px 0 34px;
  border-radius: 14px;
  box-shadow: 0px 2px 4px 2px #00000025;
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Componente_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90px;
  height: 90px;
  min-width: 90px;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 150%;
  }

  p {
    color: #000;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
    padding: 3px 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  .btn {
    height: 37px;
    padding: 0 22px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 3px 5px;

  p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Contract_Terminated = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  max-width: 360px;
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #feefef;

  p {
    color: #c31212;
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    letter-spacing: 0.17px;
    text-align: center;
  }
`;
