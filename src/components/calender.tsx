import '../App.css'
import { endOfMonth, startOfWeek, endOfWeek, startOfMonth, eachDayOfInterval, subMonths, addMonths, isSameDay} from 'date-fns'
import { useMemo, useState } from 'react'
import CalenderDays from './calender-days'
import { formatDate } from '../utils/Date-format'
import { useEvent } from '../hooks/useEvent'

const Calender = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  const {events} = useEvent()


1
     const calenderDays = useMemo(() => {
        const firstWeekStart = startOfWeek(startOfMonth(selectedMonth))
        const lastWeekEnd = endOfWeek(endOfMonth(selectedMonth))
        return eachDayOfInterval({start: firstWeekStart, end: lastWeekEnd})
    },[selectedMonth])



  return (      
    <>
    <div id="root">
      <div className="calendar">
        <div className="header justify-around py-1">
          <button className="btn" onClick={() => setSelectedMonth(new Date())}>Today</button>

          <div className=' justify-center items-center mx-4 flex-row px-2'>
            <button className="month-change-btn font-extrabold" onClick={()=> setSelectedMonth(m => subMonths(m, 1) )}>&lt;</button>
            <button className="month-change-btn font-extrabold" onClick={()=> setSelectedMonth(m => addMonths(m ,1))}>&gt;</button>
          </div>
            <span className="month-title">{`${formatDate(selectedMonth, {month: "short"})} ${selectedMonth.getFullYear()}`}</span>
        </div>
        <div className='days'>
        {calenderDays.map((day, index) => {
          return <CalenderDays 
                      key={day.getTime()} 
                      showWeekName={formatDate(day,{weekday:'short'})} 
                      selectedMonth={selectedMonth}
                      sortedEvents={events.filter(event => isSameDay(event.date, day))}
                      day={day}/>
})}
      </div>
      </div>

    </div>  
    </>
    )
}

export default Calender

