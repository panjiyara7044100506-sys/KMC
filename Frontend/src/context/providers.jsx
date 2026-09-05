import SidebarProvider from "./sidebarProvider.jsx";
import UserProvider from "./userProvider.jsx";
function Providers({children}){
    return(
        <UserProvider>
        <SidebarProvider>
            {children}
        </SidebarProvider>
        </UserProvider>
    )
}
export default Providers;