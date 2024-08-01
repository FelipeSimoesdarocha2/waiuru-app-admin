import styled from 'styled-components';

export const Component = styled.div`
  position: absolute;

  .cursor {
    position: fixed;
    z-index: 999;

    width: 20px;
    height: 20px;

    opacity: 1;
    backface-visibility: hidden;
  }

  .cursor-content {
    width: 100%;
    height: 100%;
    background-color: #989898;
    opacity: 0.5;
    transform: translate(-50%, -50%);
  }

  .cursor-highlight {
    position: fixed;
    z-index: 1001;
    background-color: #ffffffd0;
    opacity: 0;
    transform: translate3d(-50%, -50%, 1px);
    transform-style: preserve-3d;
  }

  .cursor,
  .cursor-highlight {
    pointer-events: none;
  }
`;
