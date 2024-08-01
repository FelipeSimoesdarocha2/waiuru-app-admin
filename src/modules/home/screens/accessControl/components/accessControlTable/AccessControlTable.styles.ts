import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  table {
    border-collapse: collapse;
  }

  thead {
    background-color: #f9f9f9;
  }

  thead tr {
    height: 57px;
    text-align: justify;
  }

  thead tr p {
    margin: 0 2rem;
    text-align: center;
    font-size: 14px;
    line-height: 150%;
    color: var(--black-primary);
  }

  thead tr :first-child p {
    text-align: start;
    margin-left: 100px;
  }

  tbody tr {
    height: 60px;
    border-bottom: 1px solid #f9f9f9;
  }

  tbody tr:hover {
    background: #f0f0f5;
  }

  tbody tr td:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;

    height: 60px;
    margin-left: 1rem;
  }

  tbody tr td:first-child p {
    margin: 0;
  }

  tbody tr td:first-child img {
    margin-left: 1rem;
  }

  tbody tr td p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  tbody tr td:last-child span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  tbody tr td:last-child span p {
    padding: 0 2rem;
    background: #f9f9f9;
    border-radius: 20px;
  }
`;
