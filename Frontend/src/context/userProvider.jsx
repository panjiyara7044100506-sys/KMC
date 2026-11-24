import { useContext, useEffect, useState } from "react";
import UserContext from "./userContext.js";
import axios from "axios";



function UserProvider({children}){
    const[userData,setUserData] = useState(null);
    const[loading,setloading] = useState(false);

    useEffect(()=>{
        async function restoreUser(){
            const token = localStorage.getItem("token");
            try{
                if(!token){
                setUserData(null);
                setloading(false);
                return;
            }

            const response = await axios.get("http://localhost:3000/api/users/restoreuser",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setUserData(response.data.user);
            }catch(error){
                localStorage.removeItem("token");
                setUserData(null);
            }finally{
                setloading(false);
            }
        }
        restoreUser();  
    },[])

    function logOut(){
        localStorage.removeItem("token");
        setUserData(null);
    }

    return(
        <UserContext.Provider value={{userData,setUserData,logOut,loading,setloading}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser= () =>{
    return useContext(UserContext);
}
export default UserProvider;