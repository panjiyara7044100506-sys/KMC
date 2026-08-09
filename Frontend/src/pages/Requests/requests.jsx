import React from "react";
import './requests.css'
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Hamburger from "../../components/Hamburger/Hamburger.jsx";

function Requests({ show, setShow }) {
    const reports = [
        { id: 1, icon: "💡", title: "street light repair", description: "par avenue salt lake-v", status: "in progress" },
        { id: 2, icon: "💡", title: "street light repair", description: "par avenue salt lake-v", status: "in progress" },
        { id: 3, icon: "💡", title: "street light repair", description: "par avenue salt lake-v", status: "in progress" },
    ]
 
    return (
        <div className="requests">
            <Sidebar show={show} setShow={setShow} />
            <Hamburger show={show} setShow={setShow}/>
            <div className="request-top">
                {reports.length===0?<div className="report-empty" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <h1>No Report Available</h1>
                </div>:<>
                <h2>All Reports</h2>
                <div className="report-list">
                    {reports.map((item) => {
                        return (
                            <section className="report">
                                <div className="report-icon">{item.icon}</div>
                                <div className="report-info">
                                    <a href="">{item.title}</a>
                                    <p>{item.description}</p>
                                </div>
                                <button><img src="\src\assets\delete.png" alt="" /></button>
                                <span>{item.status}</span>
                            </section>
                        )
                    })}
                </div></>}
            </div>
        </div>
    )
}

export default Requests;