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
    display: flex;

    height: 40px;
    text-align: left;
  }

  thead tr th {
    margin-left: 2rem;
  }

  tbody tr {
    height: 60px;
    border-bottom: 1px solid #e9ebf1;
  }

  tbody tr:first-child {
    border-top: 1px solid #e9ebf1;
  }

  tbody tr:hover {
    background: #f0f0f5;
  }

  tbody tr td:first-child div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2rem;

    margin-left: 2rem;
  }

  tbody tr td:first-child div p {
    text-align: start;
  }

  tbody tr td p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  tbody tr td:last-child div {
    display: flex;
    flex-direction: row;
    justify-content: right;

    gap: 4rem;
    margin-right: 2rem;
    place-items: center;

    @media (max-width: 1100px) {
      gap: 2rem;
    }

    > div:first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 20%;
    }
  }

  tbody tr td:last-child button {
  }

  tbody tr td:last-child button p {
    color: #52379d;
    font-size: 12px;
    text-transform: uppercase;
  }

  tbody tr td:last-child span {
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
