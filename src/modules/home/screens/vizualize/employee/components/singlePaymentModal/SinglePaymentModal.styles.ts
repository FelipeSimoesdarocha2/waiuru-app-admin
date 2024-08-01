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
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  width: 723px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 22.5px 26px;

  p {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 26px 24px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;
  height: 100%;
`;

export const Check = styled.div`
  display: flex;
  width: 100%;
  padding: 0 18px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
  padding: 11px 8px;

  .btn {
    width: auto;
    height: 37px;
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

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 585px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  padding: 60px 40px 20px;

  > p:first-child {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Salary_Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 723px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  padding: 0 16px 12px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    width: 100%;
    padding: 22.5px 14px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Amounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 206px;

  p {
    color: #000;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  h2 {
    color: #52379d;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  button img {
    width: 22px;
  }

  input {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  input:focus {
    border-color: #9873ffc6;
    transition: all 200ms;
  }
`;
