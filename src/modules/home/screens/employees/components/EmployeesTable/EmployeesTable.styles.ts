import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px 22px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 6px 2px #e8e8e8;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin: 10px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f9f9f9;

  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    border-bottom: 1px solid #e9ebf1;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  tbody tr td {
    height: 72px;
  }
`;

export const Person = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 0 24px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }

  p {
    color: var(--black-secondary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const Action = styled.td`
  text-align: -webkit-center;

  p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: uppercase;
  }
`;
