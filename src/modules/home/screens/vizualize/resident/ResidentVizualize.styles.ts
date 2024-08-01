import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 38px 36px;
  background-color: #52379d;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  padding: 0 65px;
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

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
  }
`;

export const Date = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  border-radius: 16px;
  background-color: #fff;
  width: fit-content;

  p {
    color: #52379d;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Update = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  p {
    color: #fff;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 37px;
    border-radius: 8px;
    background-color: #faec57;
  }

  span p {
    color: #000;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .link {
    width: auto;
  }
`;
