import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  cursor: pointer;

  .label,
  .label-focused {
    display: flex;

    position: absolute;
    top: -5px;
    left: 20px;

    padding: 0 3px;

    z-index: 1;
    transition: top 0.5s;
    background: var(--white);

    color: var(--black-secondary);
    font-size: 12px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.15px;
    font-style: normal;
  }

  .label-focused {
    background: transparent;
    top: -20px;
    transition: top 0.5s ease;
  }

  .container {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    display: inline-flex;
    height: 50px;

    &.required {
      border: 1px solid #c31212;
    }

    &.focused {
      border-color: #9873ffc6;
      box-shadow: 0px 0px 3px #9873ff;
      transition: all 200ms;
    }
  }

  .focused-arrow {
    transform: rotate(-180deg);
    transition: 500ms;
  }

  .select-container {
    display: flex;
    align-items: center;

    position: relative;
    width: 100%;
  }

  .select-container span {
    position: absolute;
    right: 15px;
    transition: 500ms;
    pointer-events: none;
  }

  .custom-select {
    position: absolute;
    top: 50px;

    width: 100%;
    z-index: 100;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .custom-select ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: sticky;
    width: 100%;
  }

  .custom-select ul li,
  p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    font-style: normal;

    padding: 8px 16px;
    width: 100%;
  }

  .custom-select ul li::selection {
    background: none;
  }

  .selected {
    background-color: #f1f1f1;
  }

  .custom-select ul li:hover {
    background-color: #f1f1f1;
  }
`;
