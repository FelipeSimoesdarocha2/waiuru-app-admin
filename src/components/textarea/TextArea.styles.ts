import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: 100%;
  gap: 10px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 72px;

  &.focused {
    border-color: #9873ffc6;
    box-shadow: 0px 0px 3px #9873ff;
    transition: all 200ms;
  }

  textarea {
    background-color: transparent;
    padding: 10px;
    font-size: 14px;

    color: var(--black-secondary);
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  textarea {
    resize: none;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0 1rem;
  }

  & > div figure {
    cursor: pointer;
  }

  & > div div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 26px;

    border-radius: 60px;
    background: #52379d;
  }

  & > div div button p {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
