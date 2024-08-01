import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 315px;
  max-height: 329px;

  border-radius: 6px;
  overflow: hidden;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: #646464;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Reserved = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #646464;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    color: #323232;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  p {
    color: #323232;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
