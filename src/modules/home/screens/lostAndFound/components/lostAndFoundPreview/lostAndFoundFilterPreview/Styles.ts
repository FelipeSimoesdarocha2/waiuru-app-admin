import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 386px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: var(--black-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  letter-spacing: -0.2px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  button {
    width: auto;
    height: 37px;
  }

  .close {
    color: #52379d;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
