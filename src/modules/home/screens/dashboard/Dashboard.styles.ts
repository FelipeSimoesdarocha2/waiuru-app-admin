import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 46px 30px 8px;

  & > div:last-child {
    max-width: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 45px;

  @media (max-width: 900px) {
    gap: 20px;
  }

  h2 {
    color: var(--black-primary);
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    width: 100%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  .content {
    left: -90px;
    top: 40px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
`;

export const ContentCharts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  width: 100%;
  height: 100%;
  padding: 0 30px;

  min-width: 100%;

  & > div:first-child {
    flex-basis: 70%;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 16px;

    flex-basis: 30%;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
