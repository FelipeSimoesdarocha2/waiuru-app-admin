import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 0;

  p {
    color: var(--black-primary);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    width: 100%;
    caret-color: transparent;
  }

  p::selection {
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding: 0 1.5rem;
`;
