import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// importing the UTILS GOES IN HERE
import { DOMAIN_URL } from '../utils/utils';

const ShortUrl = () => {
    let navigate = useNavigate()
    const [url, setUrl] = useState(null)
    const [shortUrl, setShortUrl] = useState(null)
    const [loading,setLoading] = useState(false)

  const fetchIt = async()=>{
    console.log('fetching the shit')
    await axios.post(DOMAIN_URL+"/short",
     {
      origUrl:url
    }
      ).then((res)=>{
        setLoading(false)
        setShortUrl(res.data.shortUrl)
      }).catch((err)=>console.log(err))
  }

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
          <div className="app-header"><p>ASSIGNMENT 1 FROM THE GREATEST INSTRUCTOR <span className='perfection'><a href="https://samperfect.me/"  target="_blank" rel="noopener noreferrer">PERFECTION LOVEDAY</a></span></p></div>
          <form className='app-details'>
            <input type="url" name={url} placeholder='www.assignment.com/' onChange={(e)=>setUrl(e.target.value)} />
            <span className='url-title'>URL</span>
            <button className="btn shorten" onClick={(e)=>{
              e.preventDefault() 
             if(url){
              setLoading(true)
              fetchIt()
             }else{
              setLoading(false)
              alert('Please input the url to shorten')
             }
              }}>{loading? `loading`:'SHORTEN'}</button>
            <div className="shortened-url">
              <p>{shortUrl? shortUrl:`Short Url Here`}</p>
            </div>
          </form>
        </main>
        </div>
      )
}

export default ShortUrl
