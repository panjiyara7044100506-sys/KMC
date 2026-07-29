import React from "react";
import './header.css'
import { useLocation } from "react-router-dom";

function Header() {
    const heading={
        "/":"good morning, alex",
        "/requests":"requests portal",
        "/payments":"payments portal",
        "/permits":"permits portal",
        "/community":"community portal"
    }
    const location = useLocation();
    return (
        <div className="header">
            <div className="header-left-tag">
                <div className="header-brand">
                    <div className="gov-img">
                        <img src="\src\assets\Emblem_of_India_with_transparent_background.png" alt="" />
                    </div>
                    <div className="header-gov_title">
                        <h1>kmc</h1>
                        <p>westbengal government</p>
                    </div>
                </div>
                <div className="header-left">
                    <p>citizen portal</p>
                    <h1>{heading[location.pathname]}</h1>
                </div>
            </div>
            <div className="header-right">
                <div className="header-login_btn">
                    <a className="signup-link" href="">sign up</a>
                    <a className="login-link" href="">login</a>
                </div>
                <button className="emergency_btn">emergency 112</button>
            </div>
        </div>
    )
}
export default Header;