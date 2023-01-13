import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// importing the utils
import { DOMAIN_URL } from '../utils/utils';

const LinkStatistics = () => {
  let navigate = useNavigate()

  const [urls,setUrls] = useState(null)

  const fetchIt= async()=>{
    // console.log('fetching the f*ck 🤣😂')
    await axios.get(DOMAIN_URL+'/all').then((response)=>{
      setUrls(response.data.reverse())
    }).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchIt()
  })


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
          <section className="linkstatistics details">
            <div>
              <h1>ShortUrl</h1>
              <h1>OriginalUrl</h1>
              <h1>Views</h1>
            </div>
          </section>

{/* Details from the Database here */}
          {urls? urls.map((url)=>{
          return <section key={url._id} className="linkstatistics details contentsDetails">
          <div>
            <a href={`${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a>
            <a href={`${url.origUrl}`} target="_blank" rel="noopener noreferrer" title={`${url.origUrl}`}>{url.origUrl.slice(0,30)+'...'}</a>
            <p className='views'>{url.clicks}</p>
            </div>
          </section>

          }):null}
        </main>
        </div>
      )
}

export default LinkStatistics
