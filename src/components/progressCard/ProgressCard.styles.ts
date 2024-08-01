import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  width: 350px;
  height: 500px;
  padding: 32px 28px 1rem;

  overflow: hidden;
  border-radius: 20px;
  background: #52379d;
  perspective: 240px;
  transform-origin: center;
  transition: all 150ms linear;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
  }

  .card_image {
    position: absolute;
    right: 16px;
    top: 80px;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .bannerTop {
    position: absolute;
    right: 0;
    top: 0px;
  }

  .bannerBotton {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .logo {
    position: absolute;
    right: 25px;
    bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  gap: 1rem;
  z-index: 1;

  & > div {
    display: flex;
    flex-direction: column;

    height: 100%;
    gap: 4px;
  }

  & > div :first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  & > div :first-child p {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    width: 100%;
  }

  & > div :first-child figure span {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid #fff;
  }

  & > div :first-child figure .active {
    background-color: #fff;
  }

  & > div::after {
    content: '';
    width: 1px;
    height: 100%;
    min-height: 15px;
    margin-left: 5px;
    background-color: #fff;
  }

  & > div:last-child::after {
    content: '';
    width: 0;
    height: 0;
  }
`;
