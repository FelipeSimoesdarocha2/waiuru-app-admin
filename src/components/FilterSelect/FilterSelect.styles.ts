import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .link_btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 6px 16px;

    background: #f6f6f6;
    border-radius: 8px;
  }

  .link_btn p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    white-space: nowrap;
    word-wrap: break-word;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: absolute;
    z-index: 10;

    &.primary {
      top: 65px;
      left: 40px;
    }

    &.menu {
      top: 52px;
      left: auto;
      right: 0;
    }

    &.link {
      /* width: 100%; */
      top: 35px;
      left: 0px;
    }

    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .item button {
      padding: 6px 16px;
      width: 100%;
    }

    .item button:hover {
      background-color: #f1f1f1;
    }

    .item button p {
      color: var(--black-primary);
      font-size: 14px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: start;
      font-style: normal;
      white-space: nowrap;
      word-wrap: break-word;
      width: 100%;
    }

    p::selection {
      background: none;
    }
  }
`;
