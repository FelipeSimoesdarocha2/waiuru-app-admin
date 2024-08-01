import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  height: 40px;

  transition: all 600ms;
  background-color: #ffffff;

  .input {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    height: 50px;
    padding-left: 1rem;
    border: 1px solid #e9ebf9;
    border-radius: 8px;
    overflow: hidden;

    &.focused {
      border-color: #9873ffc6;
      box-shadow: 0px 0px 3px #9873ff;
      transition: all 200ms;

      img {
        opacity: 0.7;
        transition: opacity 200ms;
      }
    }

    input::placeholder {
      color: #9aa1a9;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: start;
      font-style: normal;
    }
  }
`;
