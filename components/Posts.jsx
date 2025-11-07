'use client'
import { Bookmark, ChartNoAxesColumnIncreasing, EllipsisIcon, Heart, MessageCircle, Repeat } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useGetTweets } from "../custom-hooks/useTweet"
import Link from "next/link"

const Posts = () => {
    const {isLoading,isError,error,data:tweets} = useGetTweets()

    if(isLoading) return <div>Loading...</div>
    if(isError) return error.message
    return (
        <div className="pb-40">
        {tweets?.map((tweet) => (
<div key={tweet.id} className="w-[55.4vw] flex items-start justify-start gap-3 pl-20 pr-5 py-5 border-b">
            <div>
                <Avatar className='size-10'>
                    <AvatarImage src={tweet.profiles.avatar_url} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="space-y-2 w-full">
                <div className="w-full flex justify-between items-center">
                <div className="flex gap-1 items-end">
                    <div>{tweet.profiles.name}</div>
                    <div className="text-sm text-neutral-500">@{tweet.profiles.username}</div>
                    <div className="text-neutral-500">•</div>
                    <div className="text-sm text-neutral-500">{new Date(tweet.created_at).toLocaleString()}</div>
                </div>
                <div>
                    <EllipsisIcon size={20} className="text-neutral-500" />
                </div>
            </div>
            {tweet.content && (
                <Link href={'/'}>{tweet.content}</Link>
            )}
            {tweet.image_url && (
                <div>
                    <div className='w-full h-[50vh] rounded-md overflow-hidden relative'>
                        <img src={tweet.image_url} className='w-full h-full object-cover' />
                    </div>
                </div>
            )}
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-1"><MessageCircle size={20} />2.7k</div>
                <div className="flex items-center gap-1"><Repeat size={20} />3k</div>
                <div className="flex items-center gap-1"><Heart size={20} />13k</div>
                <div className="flex items-center gap-1"><ChartNoAxesColumnIncreasing size={20} />434k</div>
                <div><Bookmark size={20} /></div>
            </div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default Posts