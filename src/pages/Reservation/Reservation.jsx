import Button from "@components/Button/Button";
import AppCalendar from "@components/Calendar/AppCalendar";
import GenerateTimeTable from "@pages/Reservation/TimeTable";
import { ReservationSection, StyledReservation } from "@pages/Reservation/styles/ReservationStyles";
import { useEffect } from "react";

function Reservation() {

  const placeholderImageUrl = 'https://via.placeholder.com/360';
  useEffect(()=> {

  }, [])

  return (
    <StyledReservation>
      <div className="header">
        <h2>예약하기</h2>
      </div>
      <img className="cakeImage" src={placeholderImageUrl} alt="cakeImage" />
      <div className="main">
        <h3>사조참치케이크</h3>
        <ReservationSection>
          <div className="main-message">
            <h4>🚨 예약 주의 사항</h4>
            <p className="main-message-content">5분 이상 지각 시 케이크 폐기</p>
          </div>
          <div className="main-time">
            <h4>1. 픽업 날짜와 시간을 선택해 주세요.</h4>
            <AppCalendar />
            <div className="time-title">오전</div>
            <ul>
              <GenerateTimeTable startTime={"2021-01-01T09:30:00"} endTime={"2021-01-01T11:30:00"}/>  
            </ul>
            <div className="time-title">오후</div>
            <ul>
              <GenerateTimeTable startTime={"2021-01-01T12:00:00"} endTime={"2021-01-01T21:30:00"}/>  
            </ul>
          </div>
          <div className="main-form">
            <h4>2. 예약 정보를 기입해 주세요.</h4>
            <div>

            </div>
            <div>
              <label>3. 레터링 정보</label>
              <input type="text" />
            </div>
            <div>
              <label>4. 요청 사항</label>
              <input type="text" />
            </div>

          </div>
          <div className="main-reserveInfo">
            3. 예약자 정보 확인
          </div>
          <div className="main-check">
            4. 동의
            <input type="checkbox" id="main-check-content"/>
          </div>
        </ReservationSection>
        <Button>예약 및 결제</Button>
      </div>
    </StyledReservation>
  )
}

export default Reservation;