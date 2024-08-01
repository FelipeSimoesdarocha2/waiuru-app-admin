import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 100%;
  max-width: 291px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 32px 16px 16px;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100%;
`;
