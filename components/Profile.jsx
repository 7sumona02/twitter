'use client'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Ellipsis } from "lucide-react"
import {useGetUser} from '@/custom-hooks/useGetUser'

const Profile = () => {
    const {session, loading, profile} = useGetUser()

    if(!session) return null  
    console.log('Session:', session)

    if(loading) return <div>Loading...</div>
    return (
    <div className="flex w-full max-w-lg flex-col gap-6 mt-5">
                    <Item variant='muted'>
                      <ItemMedia>
                        <Avatar className="size-10">
                          {profile?.avatar_url && <AvatarImage src={profile.avatar_url} />}
                        </Avatar>
                      </ItemMedia>
                      <ItemContent className="-space-y-1">
                        <ItemTitle className="text-base">{profile?.name}</ItemTitle>
                        <ItemDescription>@{profile?.username}</ItemDescription>
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
  )
}

export default Profile