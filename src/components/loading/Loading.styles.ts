import styled from 'styled-components';

export const Component = styled.span`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  border-top: 4px solid #52379d;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
