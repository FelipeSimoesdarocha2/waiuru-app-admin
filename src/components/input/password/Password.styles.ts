import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

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
    background: transparent;
    position: absolute;
    top: -20px;
    transition: top 0.5s ease;
  }

  .password-container {
    display: flex;
    align-items: center;

    transition: opacity 0.8s;
    min-width: 100%;
  }

  .password-container span {
    margin-right: 1rem;
    opacity: 0.7;
    transition:
      opacity,
      transform 1s;
    cursor: pointer;
  }

  .password-container span:hover {
    opacity: 0.7;
    transform: scale(1.1);
    transition: all 0.8s;
  }

  .input {
    display: inline-flex;
    height: 50px;
    padding-left: 10px;

    overflow: hidden;
    border-radius: 60px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    &.required {
      border: 1px solid #c31212;
    }

    &.focused {
      border-color: #9873ffc6;
      box-shadow: 0px 0px 3px #9873ff;
      transition: all 200ms;
    }

    input[type='password'] {
      font-size: 28px;
      color: var(--black-secondary);
    }

    input {
      width: 100%;
      padding: 10px;
      border: none;
      font-size: 14px;
      letter-spacing: 0.15px;
      -webkit-background-clip: text;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }
  }
`;
