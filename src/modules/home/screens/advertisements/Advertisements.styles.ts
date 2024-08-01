import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 32px;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 32px 0 32px;

  @media (max-width: 1100px) {
    padding: 32px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 40px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  gap: 23px;
  width: 100%;

  .input {
    max-width: 375px;
  }

  .input_padding {
    max-width: 375px;
    margin: 5px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    white-space: nowrap;
    word-wrap: break-word;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 10px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Lenght = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: -0.2px;
  }

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
`;
