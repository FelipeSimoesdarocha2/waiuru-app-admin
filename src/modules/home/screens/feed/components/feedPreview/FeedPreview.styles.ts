import styled from 'styled-components';

export const Component = styled.div`
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 600px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  padding-top: 14px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 80px;
    height: 26px;
    border-radius: 60px;
  }

  button p {
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }

  button:active {
    opacity: 0.9;
    transform: scale(0.9);
    transition: all 0.8s;
  }

  .accept {
    color: #fff;
    background: #52379d;
  }

  .refuse p {
    color: #52379d;
    text-transform: uppercase;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

export const Person = styled.div``;

export const Name = styled.p`
  color: #1976d2;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Create_At = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px 0;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Description = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const Recused = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 500px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    width: auto;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 5px;
  }

  button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  button:active {
    opacity: 0.9;
    transform: scale(0.9);
    transition: all 0.8s;
  }
`;

export const FieldSet = styled.div``;
