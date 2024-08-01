import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border: 2px dashed #e9ebf1;
  overflow: hidden;
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
