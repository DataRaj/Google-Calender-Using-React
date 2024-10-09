import Modal from "./modal"
import { EventFormModalProps } from "../types/event-modal-form"
import { formatDate } from "../utils/Date-format"
import { useId, useRef, useState } from "react"
import { EVENT_COLORS } from "../types/colors"
import { Event } from "../types/event"
import { UnionOmit } from "../types/unionOmit"

const ModalForm = ({onSubmit, onDelete, event, date, ...modalform}: EventFormModalProps) => {
  const newEvent = event === null || event === undefined
  const formId  = useId()
  const [color, setColor] = useState<string>(newEvent ? EVENT_COLORS[0] : event?.color!)
  const [isAllDaySelected, setIsAllDaySelected] = useState<boolean>(newEvent ? false : event?.allDay!)
  const [startTime, setStartTime] = useState<string>(newEvent ? "00" : event?.startTime!)
  const entTimeRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  console.log('Testing out the start time', startTime);
  console.log('new name of the event', nameRef.current?.value);

  function handleSubmit(e: React.FormEvent) {
    
    e.preventDefault()
    const name = nameRef.current?.value;
    const endTime = entTimeRef.current?.value;

    if(name === "" ||name == null) {
      alert("Please fill out the form")
      return
  }
  
  
    else {
    let newEvent: UnionOmit<Event, "id">;
      const commonEvent = {
        name,
        color,
        date: date || event?.date!
      }
      if(isAllDaySelected) newEvent = {
        ...commonEvent,
        allDay: true
      }
      else{
        if(endTime === "" || endTime == null || startTime === "" || startTime == null){
          return
        }
        newEvent = { ...commonEvent,
        allDay: false,
        startTime,
        endTime
      }
    } 
      onSubmit(newEvent)
      modalform.onClose() 
    }
}

  return (

    <Modal {...modalform}>
        <div className="modal-title">
        <div>{newEvent ? "Add" : "Edit"} Event</div>
        <small>{formatDate(date || event?.date!, {dateStyle: "short"}) }</small>
        <button className="close-btn" onClick={modalform.onClose} >&times;</button>
      </div>
    <form>
    <div className="form-group">
      <label htmlFor ={`${formId}-name`}>Name</label>
      <input type="text" ref={nameRef} className=" border-0 bg-slate-300 rounded-lg" name="name" id={`${formId}-name`}/>
    </div>
    <div className="form-group checkbox">
      <input type="checkbox" name="all-day" checked={isAllDaySelected} onChange={()=> setIsAllDaySelected(!isAllDaySelected)} id={`${formId}-all-day`} />
      <label htmlFor={`${formId}-all-day`}>All Day?</label>
    </div>
    <div className="row">
      <div className="form-group">
        <label htmlFor={`${formId}-start-time`}>Start Time</label>
        
        <input value={startTime} onChange={(e)=>setStartTime(e.target.value)} required={!isAllDaySelected} disabled={isAllDaySelected} type="time" name="start-time" id={`${formId}-start-time`} />
     </div>
      <div className="form-group">
        <label htmlFor={`${formId}-end-time`}>End Time</label>
        <input min={startTime} ref={entTimeRef}  required={!isAllDaySelected} disabled={isAllDaySelected} type="time" name="end-time" id={`${formId}-end-time`} />
      </div>
    </div>
    <div className="form-group">
      <label>Color</label>
      <div className="row left">
      {EVENT_COLORS.map((c) => (
  <div key={c} className="relative">
    <input
      type="radio"
      name="color"
      value={`${formId}-${c}`}
      id={`${formId}-${c}`}
      checked={color === c}
      onChange={() => setColor(c)}
      className="peer absolute opacity-0 -left-[9999px]"
    />
    <label htmlFor={`${formId}-${c}`} className="relative cursor-pointer">
      <span
        className={`block w-7 h-7 rounded ${color === c ? 'opacity-100' : 'opacity-25'} 
                    peer-checked:opacity-100 peer-focus:outline peer-focus:outline-1
                     peer-focus:outline-black bg-${c}-500`}
      ></span>
    </label>
  </div>
))}



        
        {/* <label htmlFo{`="blue`><s}pan className="sr-only">Blue</span></label>
        <input
          type="radio"
          name="color"
          value="red"
          id="red"
          className="color-radio"
        />
        <label htmlFor="red"><span className="sr-only">Red</span></label>
        <input
          type="radio"
          name="color"
          value="green"
          id="green"
          className="color-radio"
        />
        <label htmlFor="red"><span className="sr-only">Yellow</span></label>
        <input
          type="radio"
          name="color"
          value="yellow"
          id="yellow"
          className="color-radio"
        /> */}


      </div>
    </div>
    <div className="row">
      <button className="btn btn-success" onSubmit={handleSubmit} type="submit">{newEvent? "Add" : "Edit"}</button>
      {onDelete != null && <button onClick={onDelete} className="btn btn-delete" type="button" >Delete</button>}
    </div>
  </form>
</Modal>
  )
}

export default ModalForm
