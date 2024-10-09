import '../App.css'
import {isSameMonth,isBefore, endOfDay, isToday} from "date-fns"
import { cc } from '../utils/cc'
import { formatDate } from '../utils/Date-format'
import { useState } from 'react'
import ModalForm from './modal-form'
import { useEvent } from '../hooks/useEvent'
import { CalenderDaysProps } from '../types/calenderDays'

const CalenderDays = ({showWeekName, day,selectedMonth, sortedEvents}: CalenderDaysProps) => {
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false)
  const { events } = useEvent()
  return (
        
        <div className={cc("day", !isSameMonth(day,selectedMonth) && "non-month-day",
                                 isBefore(endOfDay(day),new Date()) && "old-month-day")}> 
        <div className="day-header">
        <div className="week-name">{showWeekName}</div>
        <div className={cc("day-number", isToday(day) && "today")}>{formatDate(day,{day: "numeric"})} </div>
        <button className="add-event-btn" onClick={() => setIsNewEventModalOpen(true)}>+</button>
      </div>
      {
        sortedEvents.map((event) => {
          return (
            <button key={event.id} className={cc("event", event.allDay && "all-day-event", event.color)}>
              <div className="event-name">{event.name}</div>
            </button>
         
      //   <div className="events">
      //   <button className="all-day-event blue event">
      //     <div className="event-name">Short</div>
      //   </button>
      //   <button className="all-day-event green event">
      //     <div className="event-name">
      //       Long Event Name That Just Keeps Going
      //     </div>
      //   </button>
      //   <button className="event">
      //     <div className="color-dot blue"></div>
      //     <div className="event-time">7am</div>
      //     <div className="event-name">Event Name</div>
      //   </button> 
      // </div>
       )
      })
      }

      <ModalForm isOpen={isNewEventModalOpen} onClose={() => setIsNewEventModalOpen(false)} onSubmit={() => null} date={day}/>
    </div>
  )
}


export default CalenderDays
