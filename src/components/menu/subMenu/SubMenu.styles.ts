import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 4px;

  width: 100%;
  border-radius: 16px;
  cursor: pointer;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 220px;
  padding: 12px 15px;
  border-radius: 16px;

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

  p::selection {
    background: none;
  }

  img:nth-child(3) {
    transform: rotate(0deg);
  }

  &.open {
    img:nth-child(3) {
      transform: rotate(-180deg);
      transition: transform 500ms;
    }
  }

  &.active {
    background-color: #52379d;

    p {
      color: var(--white);
    }

    img {
      filter: invert(1);
    }
  }

  &:not(&:active) {
    &:hover {
      background-color: #52379d;

      p {
        color: var(--white);
      }

      img {
        filter: invert(1);
      }
    }
  }

  &:active {
    background-color: #52379d;
    transform: scale(0.95);

    p {
      color: var(--white);
    }

    img {
      filter: invert(1);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 4px;
`;
