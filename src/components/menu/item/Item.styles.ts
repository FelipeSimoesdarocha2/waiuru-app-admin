import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  width: 220px;
  padding: 12px 15px;

  border-radius: 16px;
  cursor: pointer;

  p {
    color: var(--black-primary);
    font-size: 14px !important;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;

    caret-color: transparent;
  }

  p::selection {
    background: none;
  }

  &.active {
    background-color: #52379d;
    transition: background-color 250ms linear;

    p {
      color: var(--white);
    }

    img {
      filter: invert(1);
    }
  }

  &:not(&:active) {
    &:hover {
      background-color: #52378d;

      p {
        color: var(--white);
      }

      img {
        filter: invert(1);
      }
    }
  }

  &:active {
    background-color: #52378d;
    transform: scale(0.95);

    p {
      color: var(--white);
    }

    img {
      filter: invert(1);
    }
  }
`;
