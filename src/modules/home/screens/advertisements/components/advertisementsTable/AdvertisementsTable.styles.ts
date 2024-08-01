import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  table {
    border-collapse: collapse;
  }

  thead tr {
    height: 57px;
    text-align: justify;
  }

  thead {
    background-color: #f9f9f9;
  }

  thead tr p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    margin: 0 2rem;
  }

  thead tr :first-child p {
    text-align: start;
  }

  tbody tr {
    height: 60px;
    border: 1px solid #f9f9f9;
  }

  tbody tr:hover {
    background: #f0f0f5;
  }

  tbody tr td:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;
    margin-left: 1rem;
  }

  tbody tr td:first-child img {
    margin-left: 1rem;
  }

  tbody tr td {
    color: var(--black-primary);
    font-size: 14px;
  }

  tbody tr td p {
    color: var(--black-secondary);
    text-align: center;
  }

  tbody tr td:last-child div {
    display: flex;
    justify-content: center;
  }

  tbody tr td:last-child span {
    max-width: 90px;
    max-height: 30px;
    border-radius: 16px;
    padding: 3px 10px;
  }

  tbody tr td:last-child span p {
    color: #fff;
    line-height: 150%;
    font-weight: 400;
  }
`;
