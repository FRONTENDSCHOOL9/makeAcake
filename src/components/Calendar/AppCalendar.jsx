import { StyledCalendarWrapper, StyledCalender } from "@components/Calendar/styles/StyledAppCalendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function AppCalendar (){

  const [value, onChange] = useState(new Date());

  const tileClassName = ({ date }) => {
    // 일요일인 경우 highlight 클래스 추가
    if (date.getDay() === 0) {
      return 'highlight';
    }
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalender 
        locale="ko" onChange={onChange} value={value}
        formatDay={(locale, date) => moment(date).format('D')}
        formatYear={(locale, date)=> moment(date).format("YYYY")}
        formatMonthYear={(locale, date)=> moment(date).format("YYYY. MM")}
        calendarType="gregory"
        minDetail="year"
        next2Label={null}
        prev2Label={null}
        tileClassName={tileClassName}
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
      />
    </StyledCalendarWrapper>
  )
}

export default AppCalendar;