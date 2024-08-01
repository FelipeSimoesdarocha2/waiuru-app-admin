import styled from 'styled-components';

export const Component = styled.div`
  position: absolute;
  top: 34px;
  right: -20px;
  z-index: 100;

  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  .first_child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 60px;
    height: 30px;
    padding: 6px 16px;
  }

  button p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  & > div button:hover {
    background: #f1f1f1;
  }

  .active {
    background: rgba(82, 55, 157, 0.1);
  }
`;
