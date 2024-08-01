import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px 27px;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 40px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 45px 80px 43px;
  background: #f2f4fa;
  min-height: 374px;
  height: 100%;

  @media (max-width: 900px) {
    gap: 40px;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    width: auto;
    height: 40px;
  }

  button p {
    font-size: 14px;
  }

  .search {
    width: 375px;
    border-radius: 6px;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 196px;
  height: 221px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 500ms;

  &:hover {
    box-shadow: 0px 0px 8px 1px #e3e3e3;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 500ms;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 81px;
  padding: 16px 24px;
  background: #fff;

  p:first-child {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  p:last-child {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 42px;
  position: relative;
  height: 100%;

  .footer_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    max-width: 1028px;
    padding: 27px 50px;
    margin-top: 27px;
    background: #f8f9ff;
    border-radius: 10px 0px 0px 10px;
  }

  .footer_content {
    button {
      max-width: 173px;
      height: 37px;
      padding: 0;
    }
  }

  .footer_typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer_typography .title {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
  }

  .footer_typography .sub_title {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    max-width: 700px;
  }

  .info {
    text-align: center;
    width: 100%;
  }
`;

export const Decorator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
