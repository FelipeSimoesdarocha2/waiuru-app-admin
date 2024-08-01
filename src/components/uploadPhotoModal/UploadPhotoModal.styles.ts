import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  width: 350px;
  height: 100px;

  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  transition: opacity 0.3s;
  cursor: pointer;

  .decore {
    position: absolute;
    bottom: 0;
  }

  .image {
    position: absolute;
    right: 0;
    bottom: 12px;
    z-index: 1;
  }

  .typography {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 30px;
    z-index: 10;
  }

  .title {
    color: #442c60;
    font-size: 16px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.15px;
    text-align: start;
    font-style: normal;
  }

  .subtitle {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.15px;
    text-align: start;
    font-style: normal;
  }
`;
