import React, { useState } from "react";
import './reportIssue.css'
import Sidebar from "../../components/Sidebar/sidebar";
import Hamburger from "../../components/Hamburger/Hamburger";

function ReportIssue({ show, setShow }) {

    const[formData,setFormData]=useState({
        issueInfo:{
            title:"",
            description:"",
            category:"",
        },
        siteLocation:{
            fullAddress:"",
            landmark:"",
            city:"",
            state:"",
            pincode:"",
            latitude:"",
            longitude:"",
        },
        applicantInfo:{
            name:"",
            email:"",
            phone:""
        }
})

function handleChange(e,section){
    const{name,value}=e.target;
    setFormData((prev)=>({
        ...prev,
        [section]:{
            ...prev[section],
            [name]:value
        },
    }))
}

function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
}
    return (
        <div className="report-issue">
            <Sidebar show={show} setShow={setShow}/>
            <Hamburger show={show} setShow={setShow}/>
            <div className="report-issue-form-container">
                <h1>tell us your problem</h1>
                <p>for immediate danger or an emergency call 112</p>
                <form className="report-issue-form" onSubmit={handleSubmit}>
                    <div className="report-issue-info">
                        <h3 className="report-issue-form-h3">problem details</h3>
                        <div className="report-issue-info-container">
                            <label htmlFor="title">
                            title
                            <input type="text" name="title" value={formData.issueInfo.title} onChange={(e)=>handleChange(e,"issueInfo")} placeholder="title" className="report-issue-form-inputs"/>
                        </label>
                        <label htmlFor="description">
                            description
                            <textarea name="description" value={formData.issueInfo.description} onChange={(e)=>handleChange(e,"issueInfo")} placeholder="description" className="report-issue-form-inputs"></textarea>
                        </label>
                        <label htmlFor="category">
                            category
                            <select name="category" value={formData.issueInfo.category} onChange={(e)=>handleChange(e,"issueInfo")} className="option report-issue-form-inputs">
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
                            <label htmlFor="fulladdress"> full address<input type="text" name="fullAddress" value={formData.siteLocation.fullAddress} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="full address" className="report-issue-form-inputs" /></label>
                            <label htmlFor="landmark">landmark<input type="text" name="landmark" value={formData.siteLocation.landmark} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="landmark" className="report-issue-form-inputs" /></label>
                            <label htmlFor="city">ctiy<input type="text" name="city" value={formData.siteLocation.city} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="city" className="report-issue-form-inputs" /></label>
                            <label htmlFor="state">state<input type="text" name="state" value={formData.siteLocation.state} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="state" className="report-issue-form-inputs" /></label>
                            <label htmlFor="pincode">pinode<input type="text" name="pincode" value={formData.siteLocation.pincode} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="pincode" className="report-issue-form-inputs" /></label>
                            <label htmlFor="location" style={{alignItems:"flex-start"}}>location
                               <section style={{display:"flex",flexDirection:"row",gap:"12px"}}>
                                    <input type="text" name="latitude" value={formData.siteLocation.latitude} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="latitude" className="report-issue-form-inputs" />
                                    <input type="text" name="longitude" value={formData.siteLocation.longitude} onChange={(e)=>handleChange(e,"siteLocation")} placeholder="longitude" className="report-issue-form-inputs" />
                               </section>
                            </label>
                        </div>
                    </div>
                    <div className="report-issue-userinfo-container">
                        <h3 className="report-issue-form-h3">applicant details</h3>
                        <div className="report-issue-userinfo">
                            <label htmlFor="usename">your name<input type="text" name="name" value={formData.applicantInfo.name} onChange={(e)=>handleChange(e,"applicantInfo")} placeholder="your name" className="report-issue-form-inputs" /></label>
                            <label htmlFor="email">email<input type="text" name="email" value={formData.applicantInfo.email} onChange={(e)=>handleChange(e,"applicantInfo")} placeholder="email" className="report-issue-form-inputs" /></label>
                            <label htmlFor="phone">phone number<input type="text" name="phone" value={formData.applicantInfo.phone} onChange={(e)=>handleChange(e,"applicantInfo")} placeholder="phone number" className="report-issue-form-inputs" /></label>
                        </div>
                    </div>
                    <button type="submit" style={{alignSelf:"center",marginTop:"20px",padding:"15px 50px",fontSize:"16px",fontWeight:"550",textTransform:"capitalize",border:"none",outline:"none",color:"white",backgroundColor:"#ff5f1f",borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",}}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ReportIssue;