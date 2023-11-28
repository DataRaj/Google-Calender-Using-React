import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return <Calender /> 
}
function Calender(){
  const [selectedMonth, setSelectedMonth] = useState(new Date());
       return (
    <div>
      <div class="calendar">
        <div class="header">
          <button class="btn">Today</button>
          <div>
            <button class="month-change-btn">&lt;</button>
            <button class="month-change-btn">&gt;</button>
          </div>
          <span class="month-title">June 2023</span>
        </div>
        <div class="days">
          <div class="day non-month-day old-month-day">
            <div class="day-header">
              <div class="week-name">Sun</div>
              <div class="day-number">28</div>
              <button class="add-event-btn">+</button>
            </div>
            <div class="events">
              <button class="all-day-event blue event">
                <div class="event-name">Short</div>
              </button>
              <button class="all-day-event green event">
                <div class="event-name">
                  Long Event Name That Just Keeps Going
                </div>
              </button>
              <button class="event">
                <div class="color-dot blue"></div>
                <div class="event-time">7am</div>
                <div class="event-name">Event Name</div>
              </button>
            </div>
          </div>
          <div class="day non-month-day old-month-day">
            <div class="day-header">
              <div class="week-name">Mon</div>
              <div class="day-number">29</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day non-month-day old-month-day">
            <div class="day-header">
              <div class="week-name">Tue</div>
              <div class="day-number">30</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day non-month-day old-month-day">
            <div class="day-header">
              <div class="week-name">Wed</div>
              <div class="day-number">31</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="week-name">Thu</div>
              <div class="day-number">1</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="week-name">Fri</div>
              <div class="day-number">2</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="week-name">Sat</div>
              <div class="day-number">3</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">4</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">5</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">6</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">7</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">8</div>
              <button class="add-event-btn">+</button>
            </div>
            <div class="events">
              <button class="all-day-event blue event">
                <div class="event-name">Short</div>
              </button>
              <button class="all-day-event red event">
                <div class="event-name">
                  Long Event Name That Just Keeps Going
                </div>
              </button>
              <button class="event">
                <div class="color-dot red"></div>
                <div class="event-time">7am</div>
                <div class="event-name">Event Name</div>
              </button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">9</div>
              <button class="add-event-btn">+</button>
            </div>
            <div class="events">
              <button class="all-day-event green event">
                <div class="event-name">Short</div>
              </button>
              <button class="event">
                <div class="color-dot blue"></div>
                <div class="event-time">7am</div>
                <div class="event-name">Event Name</div>
              </button>
              <button class="event">
                <div class="color-dot green"></div>
                <div class="event-time">8am</div>
                <div class="event-name">Event Name</div>
              </button>
              <button class="event">
                <div class="color-dot blue"></div>
                <div class="event-time">9am</div>
                <div class="event-name">Event Name</div>
              </button>
              <button class="event">
                <div class="color-dot blue"></div>
                <div class="event-time">10am</div>
                <div class="event-name">Event Name</div>
              </button>
              <button class="event">
                <div class="color-dot red"></div>
                <div class="event-time">11am</div>
                <div class="event-name">Event Name</div>
              </button>
            </div>
            <button class="events-view-more-btn">+2 More</button>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">10</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">11</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">12</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day old-month-day">
            <div class="day-header">
              <div class="day-number">13</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number today">14</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">15</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">16</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">17</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">18</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">19</div>
              <button class="add-event-btn">+</button>
            </div>
            <div class="events">
              <button class="all-day-event blue event">
                <div class="event-name">Short</div>
              </button>
              <button class="all-day-event blue event">
                <div class="event-name">
                  Long Event Name That Just Keeps Going
                </div>
              </button>
              <button class="event">
                <div class="color-dot blue"></div>
                <div class="event-time">7am</div>
                <div class="event-name">Event Name</div>
              </button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">20</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">21</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">22</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">23</div>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">24</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">25</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">26</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">27</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">28</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">29</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day">
            <div class="day-header">
              <div class="day-number">30</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
          <div class="day non-month-day">
            <div class="day-header">
              <div class="day-number">1</div>
              <button class="add-event-btn">+</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
