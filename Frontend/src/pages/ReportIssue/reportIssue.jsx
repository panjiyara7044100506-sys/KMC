import React from "react";
import './reportIssue.css'
import Sidebar from "../../components/Sidebar/sidebar";

function ReportIssue({ show, setShow }) {
    return (
        <div className="report-issue">
            <Sidebar show={show} setShow={setShow}/>
            <div className={!show ? "hamburger" : "active"}>
                <img src="\src\assets\hamburger.png" alt="" onClick={() => setShow(true)} />
            </div>
            <div className="report-issue-form-container">
                <h1>tell us your problem</h1>
                <p>for immediate danger or an emergency call 112</p>
                <div className="report-issue-form">
                    <div className="report-issue-info">
                        <h3 className="report-issue-form-h3">problem details</h3>
                        <div className="report-issue-info-container">
                            <label htmlFor="">
                            title
                            <input type="text" placeholder="title" className="report-issue-form-inputs"/>
                        </label>
                        <label htmlFor="">
                            description
                            <textarea name="description" id="" placeholder="description" className="report-issue-form-inputs"></textarea>
                        </label>
                        <label htmlFor="">
                            category
                            <select name="category" id="" className="option report-issue-form-inputs">
                                <option value="pothole">pothole</option>
                                <option value="waterlog">waterlog</option>
                                <option value="waterpollution">water pollution</option>
                                <option value="drainage">drainage</option>
                            </select>
                        </label>
                        <label htmlFor="userfile" style={{alignItems:"flex-start"}}>
                            Upload Image
                            <input type="file" className="report-issue-form-inputs"/>
                        </label>
                        </div>
                    </div>
                    <div className="report-issue-location-container">
                        <h3 className="report-issue-form-h3">site location</h3>
                        <div className="report-issue-location">
                            <label htmlFor=""> full address<input type="text" placeholder="full address" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">ladmark<input type="text" placeholder="landmark" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">ctiy<input type="text" placeholder="city" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">state<input type="text" placeholder="state" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">pinode<input type="text" placeholder="pincode" className="report-issue-form-inputs" /></label>
                            <label htmlFor="" style={{alignItems:"flex-start"}}>location
                               <section style={{display:"flex",flexDirection:"row",gap:"12px"}}>
                                    <input type="text" placeholder="latitude" className="report-issue-form-inputs" />
                                    <input type="text" placeholder="longitude" className="report-issue-form-inputs" />
                               </section>
                            </label>
                        </div>
                    </div>
                    <div className="report-issue-userinfo-container">
                        <h3 className="report-issue-form-h3">applicant details</h3>
                        <div className="report-issue-userinfo">
                            <label htmlFor="">your name<input type="text" placeholder="your name" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">email<input type="text" placeholder="email" className="report-issue-form-inputs" /></label>
                            <label htmlFor="">phone number<input type="text" placeholder="phone number" className="report-issue-form-inputs" /></label>
                        </div>
                    </div>
                    <button style={{alignSelf:"center",marginTop:"20px",padding:"15px 50px",fontSize:"16px",fontWeight:"550",textTransform:"capitalize",border:"none",outline:"none",color:"white",backgroundColor:"#ff5f1f",borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",}}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ReportIssue;