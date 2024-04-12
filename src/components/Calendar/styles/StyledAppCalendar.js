import Calendar from "react-calendar"
import styled from "styled-components"
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
`

export const StyledCalender = styled(Calendar)`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  background-color: var(--primary-white-color);
  font-family: PretendardWoffSemiBold, sans-serif;

  // 전체 폰트 컬러
  .react-calendar__month-view {
    abbr {
      color: var(--primary-black-color);
      font-family: PretendardWoffRegular, sans-serif;
    }
  }

  // 상단 년, 월 크기 조절
  .react-calendar__navigation {
    height: 30px;
    width: fit-content;
  }

  // 상단 년, 월 폰트 설정, 버튼 border-radius
  .react-calendar__navigation button {
    font-family: PretendardWoffSemiBold, sans-serif;
    font-size: var(--font-size-small);
    border-radius: 5px;
  }

  // 년, 월 상단 네이게이션 칸 줄임
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  // 요일 밑줄 제거
  .react-calendar__month-view__weekdays abbr{
    font-family: PretendardWoffSemiBold, sans-serif;
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: var(--secondary-pink-color);
  }

  .react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--weekend)
  + .react-calendar__month-view__days__day--weekend:not(
    .react-calendar__month-view__days__day--neighboringMonth
  ) {
  color: #d10000 !important;
}

  .highlight abbr {
    color: var(--secondary-pink-color);
  }

  .react-calendar__tile--now {
    background-color: var(--primary-white-color);
    border-radius: 5px;
    & abbr {
      padding: 3px;
      border-radius: 5px;
      background-color: var(--gray-color-300);
    }

    // TODO: 날짜 클릭 시 background 색상 안바뀌는거 수정하기
    .react-calendar__tile--active:enabled:hover, 
    .react-calendar__tile--active:enabled:focus,
    .react-calendar__tile:enabled:hover, 
    .react-calendar__tile:enabled:focus {
      background-color: var(--primary-pink-color) !important; 
      border-radius: 5px;
    }
  }

  .react-calendar__tile--active {
    background-color: var(--pink-color-100);
    border-radius: 5px;
    border: 1px solid var(--secondary-pink-color)
  }
`