import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 32px 32px 0;

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    height: 70px;
    max-width: 920px;
    padding: 6px 16px;

    background-color: #f9f9f9;
    border-radius: 8px;

    p {
      color: var(--black-primary);
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: start;
      font-style: normal;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  padding: 0 40px;
  margin-bottom: 100px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > div:first-child > :nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 10px;
    position: relative;
  }

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 10px;

    width: 40px;
    height: 40px;

    border-radius: 60px;
    transition: all 500ms;
  }

  .error:hover {
    background: rgba(82, 55, 157, 0.05);
    transition: all 250ms;
  }

  .error:hover .tooltip {
    display: block;
  }

  .tooltip {
    position: absolute;
    right: 0;
    left: 0;

    color: #fff;
    background: #616161;
    border-radius: 4px;
    transform: translateX(52%);
    padding: 4px 8px;
    width: fit-content;
    display: none;
  }

  .tooltip p {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div > div p {
    color: var(--black-primary);
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  & > div > div > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div > div > div p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  h2 {
    color: var(--black-primary);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
    margin: 32px 0 16px;
  }

  & > div h2:first-child {
    margin-top: 16px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  position: fixed;
  width: 100%;
  height: 78px;
  left: 0;
  bottom: 0;
  padding: 20px 40px 20px 10px;
  flex-shrink: 0;

  background: #fff;
  box-shadow: 3px -1px 4px 0px rgba(0, 0, 0, 0.2);

  button {
    width: 360px;
  }
`;
