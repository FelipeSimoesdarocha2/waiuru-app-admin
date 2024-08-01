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
  width: 511px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 24px;

  p {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.2px;
    max-width: 404px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:  8px;
  width: 100%;
  padding: 11px 8px;
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
