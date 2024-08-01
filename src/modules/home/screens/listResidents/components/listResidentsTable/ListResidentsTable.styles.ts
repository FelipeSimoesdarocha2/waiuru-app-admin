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
`;

export const Person = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 60px;
  margin-left: 20px;

  img {
    margin-left: 16px;
  }

  p {
    color: var(--black-secondary);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Adress = styled.td`
  p {
    color: var(--black-secondary);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;


export const Status = styled.td`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 74px;
    height: 24px;
    border-radius: 16px;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Action = styled.td``;

export const Wrapper = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 60px;

  img {
    width: 5px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  right: 70px;
  top: 30px;
  z-index: 10;

  min-width: 228px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  button {
    width: 100%;
    padding: 6px 16px;
  }

  button:hover {
    background: #f0f0f5;
  }

  button p {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;
