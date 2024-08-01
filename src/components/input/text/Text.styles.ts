import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .label,
  .label-focused {
    display: flex;
    position: absolute;
    top: -5px;
    left: 20px;

    background: var(--white);
    padding: 0 3px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.15px;
    color: var(--black-secondary);
    z-index: 1;
    transition: top 0.5s;
  }

  .label-focused {
    position: absolute;
    top: -20px;
    background: transparent;
    transition: top 0.5s ease;
  }

  .input {
    display: inline-flex;
    height: 50px;
    padding-left: 10px;

    overflow: hidden;
    border-radius: 60px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    :disabled {
      cursor: no-drop;
    }

    &.required {
      border: 1px solid #c31212;
    }

    &.focused {
      border-color: #9873ffc6;
      box-shadow: 0px 0px 3px #9873ff;
      transition: all 200ms;
    }

    input {
      background-color: transparent;
      border: none;
      width: 100%;
      padding: 10px;
      font-size: 14px;
      letter-spacing: 0.15px;
      -webkit-background-clip: text;

      &:focus {
        outline: none;
      }
    }
  }
`;
