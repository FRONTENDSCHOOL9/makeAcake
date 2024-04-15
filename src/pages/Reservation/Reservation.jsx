import Button from "@components/Button/Button";
import AppCalendar from "@components/Calendar/AppCalendar";
import GenerateTimeTable from "@pages/Reservation/GenerateTimeTable";
import { ReservationSection, StyledReservation } from "@pages/Reservation/styles/ReservationStyles";
import { useEffect, useState } from "react";

function Reservation() {
  const [ cake, setCake ] = useState(null);
  const [ selectedOption, setSelectedOption ] = useState(null);
  const [ selectedTime, setSelectedTime ] = useState(null);
  const placeholderImageUrl = 'https://via.placeholder.com/360';
  useEffect(()=> {
    const fakeCake = {
      name: '사조참치케이크', 
      price: {
        mini: 20000,
        1: 30000,
        2: 40000,
        3: 50000
      }
    }
    setCake({ ...fakeCake, price: {...fakeCake.price} });
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  if(!cake || !cake.price) return null;

  return (
    <StyledReservation>
      <div className="header">
        <h2>예약하기</h2>
      </div>
      <img className="cakeImage" src={placeholderImageUrl} alt="cakeImage" />
      <div className="main">
        <h3>{ cake.name }</h3>
        <ReservationSection>
          <div className="main-time">
            <h4>1. 픽업 날짜와 시간을 선택해 주세요.</h4>
            <AppCalendar />
            <div className="time-title">오전</div>
            <ul>
              <GenerateTimeTable startTime={"2021-01-01T09:30:00"} endTime={"2021-01-01T11:30:00"} handleTimeClick={handleTimeClick} selectedTime={selectedTime} />  
            </ul>
            <div className="time-title">오후</div>
            <ul>
              <GenerateTimeTable startTime={"2021-01-01T12:00:00"} endTime={"2021-01-01T21:30:00"} handleTimeClick={handleTimeClick} selectedTime={selectedTime}/>  
            </ul>
          </div>
          <div className="main-form">
            <h4>2. 예약 정보를 확인해 주세요.</h4>
            <form>
              <div>
                <label htmlFor="size">1. 사이즈를 선택해 주세요.</label>
                <div className="cake-option">
                  {Object.keys(cake.price).map((option, index) => (
                    <button
                      key={index}
                      className={selectedOption === option ? 'cake-option-btn selected' : 'cake-option-btn'}
                      onClick={() => handleOptionClick(option)}
                      type="button"
                    >
                      {option !== 'mini' ? `${option}호` : '미니도시락'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="lettering">2. 레터링 정보를 기입해 주세요.</label>
                <input type="text" id="lettering"/>
              </div>
              <div>
                <label htmlFor="request">3. 요청 사항이 있다면 남겨주세요.</label>
                <input type="text" id="request"/>
              </div>
              <div>
                <label htmlFor="pickupName">4. 픽업하시는 분 성함을 입력해 주세요.</label>
                <input type="text" id="pickupName" />
              </div>             
            </form>
          </div>
          <div className="main-check">
            <label htmlFor="check">3. 예약 확정 전 꼭 확인해 주세요.</label>
            <input type="checkbox" id="main-check-content"/>
          </div>
        </ReservationSection>
        <Button>예약 및 결제</Button>
      </div>
    </StyledReservation>
  )
}

export default Reservation;