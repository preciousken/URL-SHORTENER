import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
  return (
    <div className='homepage'>
        <a href="/shorturl" className='getStarted'>Get Started Freely</a>
    </div>
  )
}

export default Home
