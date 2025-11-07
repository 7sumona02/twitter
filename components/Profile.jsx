'use client'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Avatar,AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "./ui/button"
import { Ellipsis } from "lucide-react"
import {useGetUser} from '@/custom-hooks/useGetUser'

const Profile = () => {
    const {session, loading, profile} = useGetUser()

    if(!session) return null  
    console.log('Session:', session)

    if(loading) return (
    <div className="flex w-full max-w-lg flex-col gap-6 mt-5">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>)
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
                        <ItemDescription>{profile && `@${profile?.username}`}</ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button
                          size="icon-sm"
                          variant="ghost"
                          className="cursor-pointer"
                        >
                          {profile && <Ellipsis />}
                        </Button>
                      </ItemActions>
                    </Item>
                  </div>
  )
}

export default Profile