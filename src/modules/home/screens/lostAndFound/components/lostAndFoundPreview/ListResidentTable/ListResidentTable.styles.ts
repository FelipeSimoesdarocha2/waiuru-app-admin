import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  height: 100%;

  table {
    border-collapse: collapse;
  }

  > div:first-child {
    height: 60px;
    padding: 16px 0;
  }

  > div p {
    color: var(--black-primary);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  tbody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 400px;
  }

  tbody tr {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;

    height: 60px;
    margin: 0 8px;
    padding: 8px 10px;
  }

  tbody tr {
    border-bottom: 2px solid #f1f1f1;
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  tbody tr:hover {
    background: #f0f0f5;
  }

  tbody tr td:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  tbody tr td:first-child p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  tfoot {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 60px;

    background: #f6f6f6;
  }

  button p {
    color: #52379d;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
    text-transform: uppercase;
  }
`;
