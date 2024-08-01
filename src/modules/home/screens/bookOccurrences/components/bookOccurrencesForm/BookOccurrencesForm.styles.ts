import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 386px;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: var(--black-primary);
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  letter-spacing: -0.2px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 32px;
  width: 100%;

  .package_info {
    height: 78px;

    div:first-child {
      height: 100%;

      .input {
        border-radius: 20px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  button {
    width: auto;
    height: 40px;
  }

  .close {
    color: #52379d;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
