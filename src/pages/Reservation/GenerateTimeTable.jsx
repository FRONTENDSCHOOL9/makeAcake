import { TimeTableListItem } from '@pages/Reservation/styles/GenerateTimeTableStyles';
import PropTypes from 'prop-types';

GenerateTimeTable.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  handleTimeClick: PropTypes.func,
  selectedTime: PropTypes.string
}

function GenerateTimeTable({startTime, endTime, handleTimeClick, selectedTime}) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const timeTable = [];
  for(let time = start; time <= end; time.setMinutes(time.getMinutes() + 30)) { 
    timeTable.push(new Date(time)); 
  }



  const buttons = timeTable.map((time, index) => {
    const timeString = time.toLocaleTimeString("ko-KR", {hour: "2-digit", minute: "2-digit", hourCycle: "h23"})
    
    return (
      <TimeTableListItem className="time_item" key={index}>
      <button key={index} type="button" 
      className= { selectedTime === timeString ? 'selected-time-btn' : '' }
      onClick={() => handleTimeClick(timeString)}> 
        {timeString}
      </button>   
    </TimeTableListItem>
    )
  }) 

  return buttons;
}

export default GenerateTimeTable;