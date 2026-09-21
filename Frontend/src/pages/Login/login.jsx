import React, { useEffect, useState } from "react";
import './login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userProvider.jsx";


function Login() {
    const navigate = useNavigate();
    const {setUserData } = useUser();
    const [loading, setloading] = useState(false);
const[errorMsg,setErrorMsg]=useState(null);

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

            if (result.data.success) {
                setUserData(result.data.user)
                navigate('/');
                
                setData({
                    email: "",
                    password: ""
                });

                
            }
        } catch(error){
                  setErrorMsg({success:error.response.data.success,message:error.response.data.message});
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
            {errorMsg!== null?<p>{errorMsg.message}</p>:null}
        </div>
    )
}
export default Login;