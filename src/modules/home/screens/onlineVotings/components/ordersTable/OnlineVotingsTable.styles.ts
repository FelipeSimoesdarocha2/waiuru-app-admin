import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #e9ebf1;
    padding: 0 9px;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 0 9px;
    border-bottom: 1px solid #e9ebf1;
  }

  .item:hover {
    background: #f0f0f5;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 12px 0;
  }

  .typography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    padding: 0 10px;
  }

  .typography .name {
    color: var(--black-secondary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .typography .description {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .typography :last-child {
    background: #f9f9f9;
    border-radius: 16px;
    padding: 4px 10px;
  }

  .typography .start_date {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
