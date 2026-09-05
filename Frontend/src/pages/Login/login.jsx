import React, { useState } from "react";
import './login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userProvider.jsx";


function Login() {
    const navigate = useNavigate();
    const {userData, setUserData } = useUser();
    const [loading, setloading] = useState(false);
    const[data,setData]=useState({
        email:"",
        password:""
    })
    function handleOnChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setloading(true)
        try {
            const result = await axios.post("http://localhost:3000/api/users/login", data)
            console.log(result.data);

            if (result.data.success) {
                setUserData(result.data)
                console.log(result.data.user.name)
                navigate('/');

                setData({
                    email: "",
                    password: ""
                });
            }
        } catch(err){
            // console.log(err);
            window.alert(err.response?.data?.message || "something went wrong");
        } finally {
            setloading(false);
        }
    }
    return (
        <div className="login-container">
            {loading? <div className="loader"></div> : null}
            <label htmlFor="email">
                Email
                <input type="email" name="email" value={data.email} onChange={handleOnChange} />
            </label>
            <label htmlFor="pasword">
                password
                <input type="password" name="password" value={data.password} onChange={handleOnChange} />
            </label>
            <label htmlFor="submit">submit<button onClick={handleSubmit}>submit</button></label>
        </div>
    )
}
export default Login;