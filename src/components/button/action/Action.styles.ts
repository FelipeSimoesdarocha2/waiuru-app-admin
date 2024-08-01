import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  height: 50px;
  padding: 0 32px;
  border-radius: 60px;
  border: 1px solid var(--white);
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
    white-space: nowrap;
    word-wrap: break-word;
    width: 100%;
  }

  p::selection {
    background: none;
  }

  &.primary {
    background-color: #52379d;
    border: 1px solid var(--white);

    p {
      color: var(--white);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e0e0e0;
    }

    &:disabled p {
      color: #a6a6a6;
    }

    &:not(&:disabled) {
      &:hover {
        background-color: #52378d;
        transition: background-color 150ms linear;
      }
    }
  }

  &.secondary {
    background-color: #52379d;
    border: 1px solid var(--white);

    p {
      color: var(--white);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e0e0e0;
    }

    &:disabled p {
      color: #a6a6a6;
    }

    &:not(&:disabled) {
      &:hover {
        background-color: #52378d;
      }
    }
  }

  &.ghost {
    background-color: #fff;
    border: 1px solid #52379d;

    p {
      color: #52379d;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e0e0e0;
    }

    &:disabled p {
      color: #a6a6a6;
    }

    &:not(&:disabled) {
      &:hover {
        transition: background-color 150ms linear;
      }
    }
  }

  &.ghost_secondary {
    background-color: #e9ebf1;

    p {
      color: #52379d;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e0e0e0;
    }

    &:disabled p {
      color: #a6a6a6;
    }

    &:not(&:disabled) {
      &:hover {
        transition: background-color 150ms linear;
      }
    }
  }

  .lottie {
    display: flex;
    align-items: center;
    width: 40px;
  }
`;
