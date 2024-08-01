import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
`;

export const Title = styled.p`
  color: var(--black-secondary);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: center;
  font-style: normal;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #838f9e;
  border-radius: 60px;
  padding: 8px 22px;
  transition: all 250ms;

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }

  &:hover {
    opacity: 0.9;
    transition: opacity 500ms;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 500ms;
  }

  &:focus {
    outline: 0px solid;
  }
`;
