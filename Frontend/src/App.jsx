import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx';
import Home from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests/requests.jsx';
import ReportIssue from './pages/ReportIssue/reportIssue.jsx';

function App() {
  
  const[currState,setCurrState]=useState("home")
  const[show,setShow]=useState(false);
  return (
    <>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home show={show} setShow={setShow}/>}/>
        <Route path='/requests' element={<Requests show={show} setShow={setShow}/>}/>
        <Route path='/reportIssue' element={<ReportIssue show={show} setShow={setShow}/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
