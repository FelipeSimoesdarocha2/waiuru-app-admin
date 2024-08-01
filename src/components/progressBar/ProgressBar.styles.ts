import styled from 'styled-components';

export const Component = styled.div<{ width: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  width: 100%;

  div {
    width: 100%;
    height: 5px;

    background: #d6cfe8;
  }

  span {
    width: ${props => props.width}%;
    height: 6px;

    background: #52379d;
    transition: all 500ms;
  }

  p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.17px;
    align-items: center;
    font-style: normal;
  }
`;
