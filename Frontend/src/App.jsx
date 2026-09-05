import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx';
import Home from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests/requests.jsx';
import ReportIssue from './pages/ReportIssue/reportIssue.jsx';
import Payment from './pages/payments/payment.jsx';
import Login from './pages/Login/login.jsx';

function App() {
  
  const[show,setShow]=useState(false);
  return (
    <>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home show={show} setShow={setShow}/>}/>
        <Route path='/requests' element={<Requests show={show} setShow={setShow}/>}/>
        <Route path='/reportIssue' element={<ReportIssue show={show} setShow={setShow}/>}/>
        <Route path='/payments' element={<Payment show={show} setShow={setShow}/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
