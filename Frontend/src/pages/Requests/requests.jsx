import React from "react";
import './requests.css'
import Sidebar from "../../components/Sidebar/sidebar.jsx";

function Requests({show,setShow}){
    return (
        <div className="requests">
            <Sidebar show={show} setShow={setShow}/>
            <div className={!show?"hamburger":"active"}>
                <img src="\src\assets\hamburger.png" alt="" onClick={()=>setShow(true)}/>
            </div>
                
        </div>
    )
}

export default Requests;