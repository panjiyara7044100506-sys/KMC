import { useState } from "react";
import SidebarContext from "./sidebarContext.js";

function SidebarProvider({children}){
    const[currState,setCurrState]=useState("home");
    return(
        <SidebarContext.Provider value={{currState,setCurrState}}>
            {children}
        </SidebarContext.Provider>
    )
}
export default SidebarProvider;