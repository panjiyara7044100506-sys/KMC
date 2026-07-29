import SidebarProvider from "./sidebarProvider.jsx";

function Providers({children}){
    return(
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}
export default Providers;