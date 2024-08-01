import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 46px 46px 26px;
  border-bottom: 1px solid #e9ebf1;

  .sub_title {
    max-width: 878px;
    padding: 6px 16px;
    height: 70px;

    background-color: #f9f9f9;
    border-radius: 8px;
  }

  .sub_title p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: start;
    font-style: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;

  margin: 0 var(--margem-70);
  transition: margin 0.5s ease-in-out;

  .content_hero:first-child {
    display: flex;
    flex-direction: column;
    gap: 36px;

    height: 100%;
  }

  & > div:last-child {
    margin-top: 30px;
  }

  .content_hero:first-child .content_header {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .content_hero:first-child .content_header > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    p:first-child {
      color: var(--black-primary);
      font-size: 16px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: center;
      font-style: normal;
    }

    p:last-child {
      color: var(--black-primary);
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: center;
      font-style: normal;
    }
  }

  .content_hero:first-child .content_header > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;

    > p:nth-child(4) {
      color: var(--black-primary);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: center;
      font-style: normal;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 370px;
    height: 100%;
    margin-bottom: 2rem;
  }

  .form .steep_one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    padding-top: 16px;
  }

  .form .steep_two {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .form .steep_two :nth-child(3) > div {
    height: 78px;
    border-radius: 20px;
  }

  .form .steep_three {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form .steep_four {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .form .steep_four .title {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.15px;
    text-align: start;
    font-style: normal;
    width: 100%;
  }

  .form .steep_five {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
  }

  .form .steep_five > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }

  .form .steep_five > div:first-child p {
    color: var(--black-primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  .form .steep_five > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
  }
`;
