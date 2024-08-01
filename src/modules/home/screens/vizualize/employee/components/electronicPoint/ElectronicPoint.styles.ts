import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 6px 2px #e8e8e8;
  padding: 32px 32px 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 10px;
  position: relative;
  border-radius: 4px;
  background-color: #f9f9f9;

  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: center;
  }
`;

export const Filter_Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filter_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  z-index: 1;
  position: absolute;
  right: 40px;
  top: 10px;
  padding: 30px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 2px #e8e8e8;
`;

export const Filter_Header = styled.div`
  width: 100%;

  p {
    color: #000;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Filter_Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 0;
`;

export const Filter_Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  padding: 10px;

  button {
    width: auto;
    height: 37px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 14.5px 16px;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 127px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #000;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  strong {
    color: #000;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #f9f9f9;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 176px;
  overflow: auto;
  padding: 0 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr p {
    color: #000;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }
`;
