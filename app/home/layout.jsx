import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import RightSidebar from "../../components/RightSidebar"

export default function Layout({ children }) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                {children}
                <RightSidebar />
            </SidebarProvider>
        </>
    )
}