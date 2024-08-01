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
  gap: 18px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  width: 600px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  padding: 24px;
  gap: 21px;
  padding: 24px 24px 0;
  button {
    width: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 250px;

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Status = styled.span`
  span {
    max-height: 30px;
    border-radius: 16px;
    padding: 3px 10px;
  }

  span p {
    color: #fff;
    line-height: 150%;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;
  padding: 16px 16px;

  .input {
    border: 2px dashed rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
`;

export const ContainerResident = styled.div`
  display: flex;
  padding: 22px 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  width: 520px;
  height: 550px;
  overflow: hidden;
`;

export const ContentResident = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

export const HeaderResident = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const TitleResident = styled.p`
  color: var(--black-primary);
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  height: 100%;
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 5px;
    width: auto;
  }

  button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  button:active {
    opacity: 0.9;
    transform: scale(0.9);
    transition: all 0.8s;
  }

  .accept {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 22px;
    height: 26px;
    border-radius: 60px;
    background: #52379d;
  }

  .accept p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
    text-transform: none;
  }
`;
