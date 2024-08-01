import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  padding: 30px;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  border: 2px dashed #e9ebf1;
  overflow: hidden;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
  }

  button img {
    width: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 0;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Footer = styled.div`
  color: #52379d;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;

  p {
    font-size: 12px;
    text-transform: capitalize;
  }

  button {
    width: auto;
    height: 40px;
  }
`;

export const ContainerClose = styled.div``;
