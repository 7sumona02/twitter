import { Bell, Calendar, CircleEllipsis, Ellipsis, Home, Inbox, Mail, Search, SearchIcon, Settings, ShieldAlertIcon, TwitterIcon, User, Users } from "lucide-react"

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
import { Button } from "./ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "./ui/item"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

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
              <Button className="mt-5">Post</Button>
              <div className="flex w-full max-w-lg flex-col gap-6 mt-5">
                <Item variant='muted'>
                  <ItemMedia>
                    <Avatar className="size-10">
                      <AvatarImage src="https://github.com/evilrabbit.png" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Evil Rabbit</ItemTitle>
                    <ItemDescription>Last seen 5 months ago</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      className="cursor-pointer"
                    >
                      <Ellipsis />
                    </Button>
                  </ItemActions>
                </Item>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}