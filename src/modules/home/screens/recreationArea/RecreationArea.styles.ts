import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 46px 24px 0 45px;

  @media (max-width: 1100px) {
    padding: 32px 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: 0 0 0 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 76px;

  div {
    width: 375px;
    height: 45px;
  }

  button {
    width: 200px;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 646px;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Calendar = styled.div`
  .react-calendar {
    max-width: 322px;
  }

  .react-calendar__navigation {
    display: flex;
    border-bottom: 1px solid #9291a5;
  }

  .react-calendar__navigation__label span {
    color: #565656;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-transform: capitalize;
  }

  .react-calendar__month-view__weekdays > div {
    display: flex;
    justify-content: center;
  }

  .react-calendar__month-view__weekdays abbr {
    color: #9291a5;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
  }

  .react-calendar__month-view__days abbr {
    color: #9291a5;
    font-size: 15.058px;
    font-weight: 600;
    line-height: 16.731px;
    text-align: center;
  }

  .react-calendar__tile--active {
    background-color: #52379d;
    border-radius: 100%;
  }

  .react-calendar__tile--active abbr {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 16.731px;
    text-align: center;
  }
`;

export const Requests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Typography = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
  }

  span {
    background-color: #f00;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;
