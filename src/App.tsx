


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calender from './components/calender'
import { EventProvider } from './context/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EventProvider>
    <Calender/>
    </EventProvider>
  )
}

export default App
