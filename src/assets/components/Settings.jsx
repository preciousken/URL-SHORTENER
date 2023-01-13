import React from 'react'
import { useNavigate } from "react-router-dom";

const LinkStatistics = () => {
  let navigate = useNavigate()
    return (
        <div className="App">
    
        <aside>
        <h1 onClick={()=>navigate('/')}>URL SHORTENER </h1>
          <div className='tab'>
            <span>S</span>
            <a href="/shorturl">Shorten link</a>
          </div>
          <div className="tab">
            <span>L</span>
            <a href="/linkstatistics">Link Statistics</a>
          </div>
          <div className="tab">
            <span>S</span>
            <a href="/settings">Settings</a>
          </div>
        </aside>
    
    
        <main>
          <div className="app-header"><p>Link Statistics</p></div>
          <h1 className='settings-heading'>Settings</h1>
          <button className="btn changetheme">CHANGE THEME</button> <br />
          <button className="btn logout">LOGOUT</button>
{/* Details from the Database here */}
        </main>
        </div>
      )
}

export default LinkStatistics
