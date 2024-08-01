import styled from 'styled-components';

export const Component = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;

    position: relative;
    width: 45px;
    height: 16px;

    background: #b1b1b1;
    border-radius: 40px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  span {
    position: absolute;
    width: 20px;
    height: 20px;

    transition: all 0.4s ease-in-out;
    border-radius: 50%;

    background: #fff;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14))
      drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2));
  }

  input[type='checkbox']:checked + label {
    background-color: #bdb3da;
  }

  input[type='checkbox']:checked + label span {
    transform: translateX(25px);
    background-color: #52379d;
  }
`;
