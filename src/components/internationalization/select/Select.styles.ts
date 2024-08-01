import styled from 'styled-components';

export const Component = styled.div`
  position: relative;
  cursor: pointer;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 17px;

    &.focused {
      color: #9873ffc6;
      transition: all var(--transition-1);
    }

    & .focused-arrow {
      transform: rotate(-180deg);
      transition: all var(--transition-1);
    }

    & .selected {
      background-color: #f1f1f1;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 35px;
    width: 80px;

    background: #fff;
    transition: 500ms;
    z-index: 100;
    border-radius: 4px;
    background: var(--white);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }

  li {
    width: 100%;
    padding: 8px;
  }

  p {
    color: #212832;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
    white-space: nowrap;
    text-transform: uppercase;
  }

  p::selection {
    background: none;
  }
`;
