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
  gap: 22px;
  padding: 32px 32px 0 32px;

  @media (max-width: 1100px) {
    padding: 32px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Panel = styled.div`
  display: flex;
  gap: 30px;

  .card {
    width: 240px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
    max-width: 132px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .input {
    width: 375px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;

  .button {
    max-width: 237px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
