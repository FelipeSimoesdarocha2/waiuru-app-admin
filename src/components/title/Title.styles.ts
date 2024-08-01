import styled from 'styled-components';

export const Component = styled.h2<{ size: string }>`
  color: var(--black-primary);
  font-size: 18px;
  font-weight: 700;
  font-size: ${props => props.size};
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: center;
  font-style: normal;
`;
