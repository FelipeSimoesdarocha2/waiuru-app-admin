import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 32px 32px 0 32px;

  @media (max-width: 1100px) {
    padding: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;

  p {
  }
`;

export const Tips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 346px;
  padding: 16px;
  border-radius: 10px;
  background: #f9f9f9;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 32px;
  height: 100%;

  textarea {
    min-width: 100%;
    max-width: 100%;
    padding: 2rem;
    border-radius: 4px;
    border: 1px solid #e9ebf1;
    background: #fff;
    color: var(--black-primary);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;

    &:focus {
      outline: none;
      border-color: #9873ffc6;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(63, 67, 80, 0.24);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(63, 67, 80, 0.32);
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
  width: 100%;

  .field {
    max-width: 400px;
  }
`;
