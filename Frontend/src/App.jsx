import React, { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/header.jsx';
import Home from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests/requests.jsx';
import SidebarContext from './context/sidebarContext.js';

function App() {
  const{currState,setCurrState}=useContext(SidebarContext)
  return (
    <>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/requests' element={<Requests/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
