'use client'
import { Bookmark, ChartNoAxesColumnIncreasing, EllipsisIcon, Heart, MessageCircle, Repeat } from "lucide-react"
import { Avatar, AvatarImage } from "./ui/avatar"
import { useGetTweets } from "../custom-hooks/useTweet"
import Link from "next/link"
import moment from "moment"
import TweetActions from "./TweetActions"

const Posts = () => {
    const { isLoading, isError, error, data: tweets } = useGetTweets()
    console.log('tweets:', tweets)

    if (isLoading) return <div>Loading...</div>
    if (isError) return error.message
    console.log('tweets:', tweets)
    return (
        <div className="pb-40">
            {tweets?.map((tweet) => (
                <div key={tweet.id} className="w-[55.4vw] flex items-start justify-start gap-3 pl-20 pr-5 py-5 border-b">
                    <div>
                        <Avatar className='size-10'>
                            <AvatarImage src={tweet.profiles.avatar_url} alt="@shadcn" />
                        </Avatar>
                    </div>
                    <div className="space-y-2 w-full">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <div>{tweet.profiles.name}</div>
                                <div className="text-sm text-neutral-500">@{tweet.profiles.username}</div>
                                <div className="text-neutral-500">•</div>
                                <div className="text-sm text-neutral-500">{moment(tweet.created_at).fromNow()}</div>
                            </div>
                            <div>
                                <EllipsisIcon size={20} className="text-neutral-500" />
                            </div>
                        </div>
                        {tweet.content && (
                            <Link href={`/home/post/${tweet.id}`}>
                                {tweet.content}
                            </Link>
                        )}
                        {tweet.image_url && (
                            <Link href={`/home/post/${tweet.id}`}>
                                <div className='w-full h-[50vh] rounded-md overflow-hidden relative'>
                                    <img src={tweet.image_url} className='w-full h-full object-cover' />
                                </div>
                            </Link>
                        )}
                        <TweetActions creatorId={tweet.profiles.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts