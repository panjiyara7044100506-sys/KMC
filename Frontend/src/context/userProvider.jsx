import { useContext, useState } from "react";
import UserContext from "./userContext.js";

function UserProvider({children}){
    const[userData,setUserData] = useState(null);
    return(
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser= () =>{
    return useContext(UserContext);
}
export default UserProvider;