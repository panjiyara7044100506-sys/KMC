import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx';
import Home from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests/requests.jsx';

function App() {
  
  const[currState,setCurrState]=useState("home")
  const[show,setShow]=useState(false);
  return (
    <>
    <div className='app'>
      <Header currState={currState} />
      <Routes>
        <Route path='/' element={<Home currState={currState} setCurrState={setCurrState} show={show} setShow={setShow}/>}/>
        <Route path='/requests' element={<Requests currState={currState} setCurrState={setCurrState} show={show} setShow={setShow}/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
