import styled, { css } from 'styled-components';
import { mediaCarry } from 'styles/_mixins';

const responsive = {
  /* xl: 1101 * md: 1100 * lg: 991 * sm: 560 */
  container: css`
    ${mediaCarry.md(`
      flex-direction: column;
    `)}
  `,

  Content: css`
    ${mediaCarry.xl(`
      flex: 0 0 45%;
    `)}
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${responsive.container}

  width: 100%;
  height: 100%;

  button p {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;

  position: relative;
  width: 100%;
  height: 100vh;
  ${responsive.Content}

  background: #52379d;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
  }

  & > :nth-child(2) > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  & > :nth-child(2) > div :first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  h2 {
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }

  strong {
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;

    width: 100%;
  }

  & > :nth-child(3) {
    width: 60%;
  }

  ${responsive.Content}
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem;

  & > figure:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
  }

  & > figure:nth-child(1) p {
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    font-style: normal;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: #ffffff;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  .form-container,
  .form-container_new_pass,
  .form-container_pass {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    width: 100%;
    height: 100%;
  }

  .form-container_pass {
    gap: 140px;
  }

  .form-container_new_pass {
    gap: 122px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 18px;
    width: 360px;
  }

  .form-label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    h1 {
      color: var(--black-primary);
      font-size: 36px;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: center;
      font-style: normal;
    }

    p {
      color: var(--black-primary);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.2px;
      text-align: center;
      font-style: normal;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 38px;

    width: 100%;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    width: 100%;

    .err {
      position: absolute;
      bottom: -3rem;
      font-size: 14px;
      color: #ff9c03;
    }

    .err::before {
      content: '*';
      margin-right: 4px;
      color: red;
    }
  }

  .form-actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  .RememberAndPassword {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    padding: 0 10px;
    margin: 5px 0 5rem;
  }

  .remember,
  .RememberAndPassword button {
    color: #52379d;
    font-size: 14px;
    border: none;
    background-color: transparent;
    transition: opacity 1s;
    text-underline-offset: 3px;
    text-decoration: underline;
    cursor: pointer;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    width: 100%;
  }
`;
