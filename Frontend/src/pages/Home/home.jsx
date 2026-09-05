import React, { useState } from "react";
import './home.css'
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Hamburger from "../../components/Hamburger/Hamburger.jsx";

function Home({show,setShow}){
    
    function visit(event){
        const name = event.currentTarget.getAttribute('name');
        console.log(name)
        window.location.href=`/${name}`
    }
    return(
        <div className="home">
            <Sidebar show={show} setShow={setShow}/>
            <Hamburger show={show} setShow={setShow}/>
            <div className="home-top">
                <h2>how can we help today</h2>
                <p>Access essential city services quickly and track every request in one place.</p>
                <div className="home-top-btn">
                    <button name="reportIssue" onClick={visit}><span>⚑</span>report an issue</button>
                    <button name="payments" onClick={visit}><span>◉</span>pay bills</button>
                    <button><span>▧</span>apply for permits</button>
                    <button><span>◷</span>book appoinments</button>
                </div>
            </div>
            <div className="home-middle">
                <section className="home-middle-left">
                    <div className="home-middle-left-heading">
                        <h3>your active request</h3>
                        <a href="">view all activity</a>
                    </div>
                    <div className="request">
                        <div className="icon">💡</div>
                        <a href="" className="request-info">
                            <strong>Streetlight repair</strong>
                            <p>Park Avenue, near Oak Street · Submitted 18 Jul</p>
                        </a>
                        <span className="request-status" style={{color:"#9a7821",backgroundColor:"#fff5d9"}}>In progress</span>
                    </div>
                    <div className="request">
                        <div className="icon">♻</div>
                        <a href="" className="request-info">
                            <strong>Bulky waste collection</strong>
                            <p>17 Meadow Lane · Collection scheduled</p>
                        </a>
                        <span className="request-status" style={{color:"blue",backgroundColor:"#e4f0ff"}}>Schedule</span>
                    </div>
                    <div className="request">
                        <div className="icon">▤</div>
                        <a href="" className="request-info">
                            <strong>Parking permit renewal</strong>
                            <p>Resident zone B · Approved 16 Jul</p>
                        </a>
                        <span className="request-status" style={{color:"#19734b",backgroundColor:"#dff6e9"}}>Resolved</span>
                    </div>
                </section>
                <div className="home-middle-right">
                    <section className="side">
                        <div className="side-heading">
                            <h3>upcoming</h3>
                            <span>calender</span>
                        </div>
                        <div className="side-content">
                            <div className="side-icon">
                                Jul
                                <b>21</b>
                            </div>
                            <div className="side-info">
                                <strong>Waste collection</strong>
                                <p>Tomorrow, 7:00 AM · General waste</p>
                            </div>
                        </div>
                        <div className="side-content">
                            <div className="side-icon">
                                Jul
                                <b>21</b>
                            </div>
                            <div className="side-info">
                                <strong>Waste collection</strong>
                                <p>Tomorrow, 7:00 AM · General waste</p>
                            </div>
                        </div>
                    </section>
                    <section className="side">
                        <div className="side-heading">
                            <h3>city alert</h3>
                            <span>all alerts</span>
                        </div>
                        <div className="side-alert-info">
                            <strong>Roadworks on Market Street</strong>
                            <p>Partial closures from 22–24 July. Please allow extra travel time.</p>
                        </div>
                    </section>
                    
                </div>
            </div>
            <div className="home-bottom">
                <section className="bottom-side bottom-side-one">
                    <h3>make a payment</h3>
                    <p>Your water bill is due 30 July. Balance: $42.18</p>
                    <button>view an pay bill</button>
                </section>
                <section className="bottom-side bottom-side-two">
                    <h3>looking for something else ?</h3>
                    <p>Find local facilities, service hours, council meetings, and neighborhood updates.</p>
                    <a href=""><b>Explore city information →</b></a>
                </section>
            </div>
        </div>
    )
}
export default Home;