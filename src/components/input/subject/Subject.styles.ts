import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 10px;

  .input {
    height: 35px;
    width: 100%;

    overflow: hidden;
    border-bottom: 1px solid #e9ebf1;

    &.required {
      border: 1px solid #c31212;
    }

    &.focused {
      border-color: #9873ffc6;
      transition: all 200ms;
    }

    input {
      width: 100%;
      font-size: 14px;
    }
  }
`;
