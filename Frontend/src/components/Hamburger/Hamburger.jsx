import React from "react";
import './Hamburger.css'

function Hamburger({show,setShow}){
    return(
        <div className={!show?"hamburger":"active"}>
                <img src="\src\assets\hamburger.png" alt="" onClick={()=>setShow(true)}/>
            </div>
    )
}
export default Hamburger;