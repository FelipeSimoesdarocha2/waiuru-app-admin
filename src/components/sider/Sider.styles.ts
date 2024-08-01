import styled from 'styled-components';

export const Component = styled.nav`
  display: flex;
  flex-direction: column;

  z-index: 100;
  border-right: 1px solid #e9ebf1;
  background-color: var(--white);

  @media (max-width: 900px) {
    flex: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 90px !important;
  padding: 0px 32px;

  border-bottom: 1px solid #e9ebf1;
  background-color: var(--white);

  & > figure:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  & > figure:nth-child(1) p {
    color: #52379d;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  p::selection {
    background: none;
  }

  & > figure:nth-child(2) {
    cursor: pointer;
    transition: transform 500ms;
  }

  .collapsed {
    & > figure:nth-child(2) {
      transform: rotate(180deg);
      transition: 500ms;
    }
  }
`;

export const Content = styled.div`
  padding: 0 0 30px 2rem;
  margin: 6px 6px 0 0;
  overflow-y: auto;
  height: 100%;

  div::-webkit-scrollbar {
    width: 6px;
  }

  div ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(63, 67, 80, 0.24);
  }

  div ::-webkit-scrollbar-thumb:hover {
    background: rgba(63, 67, 80, 0.32);
  }
`;
