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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  overflow: hidden;
  background-color: #f9f9f9;
  padding: 0 60px;

  p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    padding: 0 27px;
  }
`;

export const Table = styled.div`
  width: 100%;

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }

  tbody tr {
    border-bottom: 1px solid #e9ebf1;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  tbody tr td {
    height: 72px;
    padding: 12px 0;
  }

  tbody tr .person {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 0 24px;

    p {
      white-space: nowrap;
    }
  }

  tbody tr .status {
    width: 70%;
    max-width: 70%;
  }

  tbody tr .status .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .base {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .base span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #e9ebf1;

    font-size: 12px;
  }

  .base p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2px;
  }

  .divider {
    width: 100%;
    height: 1px;
    max-width: 130px;
    background-color: #e9ebf1;
  }

  tbody tr td p {
    color: var(--black-secondary);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  .action p {
    color: #52379d;
    font-size: 12px;
    line-height: 22px;
    text-align: end;
    text-transform: uppercase;
    margin: 0 24px 0 0;
    white-space: nowrap;
  }
`;
