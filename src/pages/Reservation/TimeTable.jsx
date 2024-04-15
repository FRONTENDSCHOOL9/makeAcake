import { TimeTable } from '@pages/Reservation/styles/TimeTableStyles';
import PropTypes from 'prop-types';

GenerateTimeTable.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string
}

function GenerateTimeTable({startTime, endTime}) {

  const start = new Date(startTime);
  const end = new Date(endTime);

  const timeTable = [];
  for(let time = start; time <= end; time.setMinutes(time.getMinutes() + 30)) { 
    timeTable.push(new Date(time)); 
  }
  
  const buttons = timeTable.map((time, index) => ( 
    <button key={index} type="button"> 
      {time.toLocaleTimeString("ko-KR", {hour: "2-digit", minute: "2-digit", hourCycle: "h23" })} 
    </button>   
  ))

  return (<TimeTable>{buttons}</TimeTable>);
}

export default GenerateTimeTable;