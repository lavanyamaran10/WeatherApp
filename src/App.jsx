import { useState } from 'react'
import './App.css'
import Weather from './component/Weather'
import dayCloud from './assets/cloudy-sun (1).png'

function App() {


  return (
    <>
     <div className='main-div'>
      <div className="title-section">
        <img src={dayCloud} alt="cloud" className="title-icon" />
        <h1 className="app-title">WEATHER APP</h1>
      </div>
      <div className="mobile-title-section">
        <img src={dayCloud} alt="cloud" className="mobile-title-icon" />
        <h1 className="mobile-app-title">WEATHER APP</h1>
      </div>
      <Weather/>
     </div>
    </>
  )
}

export default App
