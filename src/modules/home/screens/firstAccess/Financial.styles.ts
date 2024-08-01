import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
  width: 100%;
  height: 100vh;
`;

export const Step_One = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
  width: 100%;
  height: 100%;
  max-width: 660px;
  max-height: 620px;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 13px 44px 0px rgba(0, 0, 0, 0.13);
`;

export const Step_One_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Step_One_Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  h2 {
    color: var(--black-primary);
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Step_One_Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  p {
    color: var(--black-primary);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    max-width: 416px;
  }
`;

export const Step_One_Actions = styled.div`
  width: 100%;
  max-width: 271px;
`;

export const Step_Two = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 96px;
  width: 100%;
  max-width: 1066px;
  padding: 46px 40px;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 13px 44px 0px rgba(0, 0, 0, 0.13);
`;

export const Step_Two_Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Step_Two_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  width: 100%;
  height: 100%;
`;

export const Step_Two_Form = styled.div`
  display: flex;
  gap: 79px;
  width: 100%;

  .camera {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 100%;
    max-width: 266px;
    max-height: 256px;
    padding: 24px 16px;

    background: #fff;
    border-radius: var(--borderRadius, 4px);
    border: 1px dashed rgba(0, 0, 0, 0.12);
  }

  .camera .title {
    color: #52379d;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    line-height: 175%;
    letter-spacing: 0.15px;
    text-align: center;
    font-style: normal;
  }

  .camera .props {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    line-height: 143%;
    letter-spacing: 0.17px;
    text-align: center;
    font-style: normal;
  }
`;

export const UploadFile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Step_Two_Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  width: 100%;

  button {
    max-width: 271px;
  }
`;

export const Step_Two_Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 41px;
  width: 100%;
  height: 100%;

  h4 {
    color: var(--black-primary);
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    max-width: 290px;
  }
`;

export const Step_Two_Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 380px;
  padding: 10px;
`;

export const Step_Two_Field = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: 100%;

  textarea {
    min-height: 150px;
    max-width: 100%;
    padding: 1rem 2rem;
    background: #fff;
    color: var(--black-primary);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 78px;
    overflow: hidden;

    &:focus {
      outline: none;
      border-color: #9873ffc6;
    }
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
`;
