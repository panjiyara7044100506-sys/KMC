import React, { useContext, useState } from "react";
import './sidebar.css'

import { NavLink } from "react-router-dom";


function Sidebar({show,setShow,currState,setCurrState}){
    const Item = [
        {id:1,label:"home",icon:"⌂",path:"/"},
        {id:2,label:"report Issue",icon:"#",path:"/reportIssue"},
        {id:3,label:"requests",icon:"◫",path:"/requests"},
        {id:4,label:"payments",icon:"◉",path:"/payments"},
        {id:5,label:"permits",icon:"▧",path:"/permits"},
        {id:6,label:"community",icon:"♧",path:"/community"},
    ]


    return(
        <div className={show?"sidebar":"active"}>
            <span><img src="\src\assets\cross_icon.png" alt="" onClick={()=>setShow(false)}/></span>
            <div className="sidebar-nav">
                {Item.map((item)=>{
                    return(
                        <NavLink to={item.path} id={item.id} className={({isActive})=>isActive?"active-nav sidebar-nav":"sidebar-nav"} onClick={()=>setCurrState(item.label)}>
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
export default Sidebar;