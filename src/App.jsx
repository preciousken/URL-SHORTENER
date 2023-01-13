import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing of pages
import ShortUrl from './assets/components/ShortUrl'
import LinkStatistics from './assets/components/LInkStatistics';
import Settings from './assets/components/Settings'
import Home from './assets/components/Home';
import SignIn from './assets/auth/SignIn';
import SignUp from './assets/auth/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shorturl" element={<ShortUrl />}></Route>
        <Route path='/signin' element={<SignIn />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/linkstatistics" element={<LinkStatistics />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
