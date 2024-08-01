import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  position: relative;
  width: 100%;
  padding: 12px 15px;

  transition: all 250ms;
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
    width: 100%;
  }

  span {
    position: relative;
    width: 8px;
    height: 8px;
    right: -15px;
    flex-shrink: 0;

    border-radius: 8px;
  }

  &.active {
    p {
      color: var(--black-primary);
    }

    span {
      background: #52379d;
    }
  }

  &:not(&:active) {
    &:hover {
      p {
        color: #52379d;
      }

      span {
        background: #52379d;
      }
    }
  }

  &:active {
    transform: scale(0.95);

    span {
      background: #52379d;
    }
  }
`;
