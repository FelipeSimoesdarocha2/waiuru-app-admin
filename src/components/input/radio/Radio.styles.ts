import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 0 10px;
  cursor: pointer;

  input {
    display: inline;
    &:checked {
      filter: hue-rotate(40deg);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  label {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
    cursor: default;
  }
`;
