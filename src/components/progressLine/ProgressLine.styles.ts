import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  span {
    width: 50px;
    height: 6px;
    background-color: #f0eef6;
    cursor: pointer;
  }

  .active {
    background-color: #52379d;
  }
`;
