import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-circle);
  cursor: pointer;

  &:hover {
    background-color: var(--light-ash);
    transition: background-color 500ms;
  }

  &:hover span {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  span {
    position: absolute;
    width: fit-content;
    right: 0;
    left: auto;
    bottom: -50px;
    padding: 4px 8px;
    border-radius: 4px;
    backdrop-filter: blur(1px);
    box-shadow: 0px 8px 10px 3px #0000001a;
    background: hsla(0, 0%, 30%, 0.9);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    cursor: auto;
  }

  span p {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
  }
`;
