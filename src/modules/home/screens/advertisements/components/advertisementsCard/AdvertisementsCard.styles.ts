import styled from 'styled-components';

export const Component = styled.div`
  width: 200px;
  height: fit-content;
  border-radius: 10px;
  background: #f6f6f6;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 26px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Name = styled.p`
  color: var(--black-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 14px 0 12px;
  border-top: 1px solid #e4e4e4;
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    width: 4px;
    height: 4px;
    flex-shrink: 0;
    background: #626262;
    border-radius: 50%;
  }

  p {
    color: #626262;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Space = styled.div`
  display: flex;
  justify-content: end;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 2px;
`;

export const Label = styled.p`
  color: #626262;
  font-size: 10px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.2px;
`;

export const Value = styled.p`
  color: var(--black);
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  word-wrap: break-word;
`;

export const Actions = styled.div`
  button p {
    color: #52379d;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.2px;
    text-transform: uppercase;
    word-wrap: break-word;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 20px;
  padding: 4px 10px;
  border-radius: 4px;
  border: 0.7px solid rgba(0, 0, 0, 0.8);

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 10px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`;
