import styled, { keyframes } from 'styled-components';

const flashAnimation = keyframes`

  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: .8;
  }
`;

export const Component = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 100%;

  img {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, transparent, #f1f1f1);
    /* animation: ${flashAnimation} 1s ease; */
    border-radius: 100%;
    z-index: 1;
  }
`;
