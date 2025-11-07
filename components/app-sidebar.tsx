import { Bell, CircleEllipsis, Home, Mail, SearchIcon, TwitterIcon, User, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import LogoutButton from "@/components/LogoutButton"
import Profile from "@/components/Profile"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Explore",
    url: "#",
    icon: SearchIcon,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Messages",
    url: "#",
    icon: Mail,
  },
  {
    title: "Communities",
    url: "#",
    icon: Users,
  },
  {
    title: "Premium",
    url: "#",
    icon: TwitterIcon,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "More",
    url: "#",
    icon: CircleEllipsis,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-[23vw]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pb-3">Twitter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="gap-2">
                      <item.icon />
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <LogoutButton />
              <Profile />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}