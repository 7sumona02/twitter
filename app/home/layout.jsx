'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import RightSidebar from "../../components/RightSidebar"
import QueryProvider from "../../providers/QueryProvider"

export default function Layout({ children }) {
    return (
        <>
            <QueryProvider>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger />
                    {children}
                    <div className="md:block hidden"><RightSidebar /></div>
                </SidebarProvider>
            </QueryProvider>
        </>
    )
}