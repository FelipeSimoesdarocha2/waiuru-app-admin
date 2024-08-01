import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;
  min-width: 305px;
  padding: 8px 12px 12px;
  background: #fff;
  overflow-y: auto;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 10px 32px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: -0.2px;
  letter-spacing: -0.2px;
`;




export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .noData {
    color: var(--black-secondary);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;

    width: 190px;
    margin-top: 100px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 300px;
  padding: 0px 14px 10px 14px;

  background: #f8f8f8;
  border-radius: 4px;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 14px;
  }

  > div:nth-child(1) span {
    padding: 2px 10px;
    border-radius: 16px;
    background: #fff;
  }

  > div:nth-child(1) span p {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .accept {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }

  > div:nth-child(2) p:first-child {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  > div:nth-child(2) p:last-child {
    color: var(--black-primary);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: relative;
    height: 40px;
    padding-top: 1rem;
  }

  > div:nth-child(3) div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 17px;

    width: 100%;
  }

  > div:nth-child(3) div:first-child p {
    color: var(--black-primary);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  > div:nth-child(3) div:first-child button:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 26px;

    background: #52379d;
    border-radius: 60px;
  }

  > div:nth-child(3) div:first-child button:first-child p {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  > div:nth-child(3) div:first-child button:last-child {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 28px;
  }

  > div:nth-child(3) div:first-child button:last-child p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }

  > div:nth-child(3) button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }

  .paperclip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 40px;
    height: 40px;
    padding: 10px;

    border-radius: 60px;
    transition: all 500ms;
  }

  > div:nth-child(3) .paperclip:hover {
    background: rgba(82, 55, 157, 0.05);
    transition: all 250ms;
  }

  > div:nth-child(3) .paperclip:hover .tooltip {
    display: block;
  }

  .tooltip {
    position: absolute;
    top: 120%;
    right: 0;
    left: auto;

    color: #fff;
    background: #616161;
    border-radius: 4px;
    transform: translateX(20%);

    display: none;
    padding: 4px 8px;
  }

  > div:nth-child(3) .tooltip p {
    color: #fff !important;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
