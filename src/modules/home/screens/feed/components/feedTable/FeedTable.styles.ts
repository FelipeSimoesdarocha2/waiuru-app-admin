import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  thead tr {
    display: flex;
    height: 30px;
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
    background: #eeebf6;
    cursor: pointer;
  }

  p {
    color: var(--black-secondary);
    font-size: 14px;
    font-weight: 600;
  }

  .checkbox_title div {
    display: flex;
    gap: 16px;
    margin-left: 2rem;
  }

  .checkbox_title div p {
    white-space: nowrap;
  }

  .type p {
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
  }

  .description p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 600px;
  }

  .description p::before {
    content: '”';
  }

  .description p::after {
    content: '”';
  }

  tbody tr td span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  tbody tr td span p {
    background: #f9f9f9;
    border-radius: 20px;
    padding: 0 2rem;
  }
`;

export const Status = styled.div`
  max-width: 200px;
  padding: 25px 10px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;
