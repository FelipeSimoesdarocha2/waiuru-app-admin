import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 140px;
  padding: 16px 20px;
  border-radius: 16px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);

  .loading {
    @keyframes skeleton-loading {
      0% {
        background-color: #f1f1f2;
        padding: 8px;
      }
      100% {
        background-color: hsl(200, 20%, 80%);
        padding: 8px;
      }
    }
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  position: relative;
  width: 100%;

  img {
    cursor: pointer;
  }
`;

export const Typography = styled.div`
  width: 100%;
  border-radius: 6px;

  &.loading {
    animation: skeleton-loading 1s linear infinite alternate;
  }
`;

export const Title = styled.p`
  color: var(--black-primary);
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: start;
  font-style: normal;
  border-radius: 6px;
`;

export const Action = styled.div`
  border-radius: 6px;

  &.loading {
    animation: skeleton-loading 1s linear infinite alternate;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;

  &.loading {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  h2 {
    color: var(--black-primary);
    font-size: 32px;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    width: 100%;
  }

  p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    width: 100%;
  }

  .down::selection {
    color: #ed3a3a;
  }

  .up::selection {
    color: #3fb5b4;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 6px;

  &.loading {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .paragraph {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }
`;
