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

  tbody tr td p {
    color: var(--black-secondary);
    font-size: 14px;
    font-weight: 600;
  }

  .name_check {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2rem;
    margin-left: 2rem;
  }

  .name_check p {
    text-transform: capitalize;
  }

  .status span {
    max-width: 90px;
    max-height: 30px;
    border-radius: 16px;
    padding: 3px 10px;
  }

  .status span p {
    color: #fff;
    line-height: 150%;
    font-weight: 400;
    text-align: center;
  }

  .info button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }
`;
