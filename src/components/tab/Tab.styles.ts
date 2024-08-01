import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;

  cursor: pointer;
  border-bottom: 2px solid #fff;
  transition: background-color 500ms ease;

  &:hover {
    background-color: rgba(215, 215, 235, 0.6);
    transition: background-color 500ms ease;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }

  &.active {
    border-bottom: 2px solid #52379d;

    p {
      color: #52379d;
      font-weight: 600;
    }
  }
`;
