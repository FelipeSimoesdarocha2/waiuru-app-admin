import styled from 'styled-components';

export const Component = styled.div`
  width: 257px;
  height: fit-content;
  border-radius: 10px;
  background: #f6f6f6;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px 15px 31px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #e4e4e4;
`;

export const Name = styled.p`
  color: var(--black-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;

export const Subject = styled.div`
  p {
    color: #626262;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Value = styled.p`
  color: var(--black);
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  word-wrap: break-word;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
  width: 100%;

  .accept {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 80px;
    height: 26px;
    border-radius: 60px;
    background: #52379d;
  }

  .accept p {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }

  button {
    width: auto;
  }

  button:active {
    opacity: 0.9;
    transform: scale(0.9);
    transition: all 0.8s;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 20px;
  padding: 4px 10px;
  border-radius: 4px;
  border: 0.7px solid rgba(0, 0, 0, 0.8);

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 10px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
