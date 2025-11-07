import Back from '../../../../components/Back'
import { Bookmark, ChartNoAxesColumnIncreasing, EllipsisIcon, Heart, MessageCircle, Repeat } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { supabase } from '../../../../lib/supabase-client'
import moment from 'moment'

const getTweet = async (id) => {
  const { data, error } = await supabase
    .from("tweets")
    .select(`
      id,
      content,
      image_url,
      created_at,
      profiles (
        id,
        username,
        name,
        avatar_url
      )
    `)
    .eq("id", id)
    .single() // 👈 this ensures you get a single object, not an array

  if (error) {
    console.error("Failed to fetch tweet:", error)
    return null
  }

  console.log("Fetched tweet:", data)
  return data
}

export default async function Page({ params }) {
  const { postid } = await params  // ✅ unwrap the async params

  const tweet = await getTweet(postid)

  if (!tweet) {
    return <div className="p-10 text-neutral-500">Tweet not found.</div>
  }

  return (
    <div className="md:w-[55.4vw] w-full pb-40">
      <div className="flex justify-between items-center py-3 border-b md:pl-15 pr-5">
        <Back />
        <div className="text-neutral-500">Reply</div>
      </div>
      <div className="md:pl-15 pr-5 border-b">
        <div className="flex items-start justify-start gap-3 py-5">
          <Avatar className="size-10">
            <AvatarImage src={tweet?.profiles?.avatar_url} alt="@shadcn" />
          </Avatar>
          <div className="space-y-2 w-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <div>{tweet?.profiles?.name}</div>
                <div className="text-sm text-neutral-500">@{tweet?.profiles?.username}</div>
                <div className="text-neutral-500">•</div>
                <div className="text-sm text-neutral-500">
                  {moment(tweet?.created_at).fromNow()}
                </div>
              </div>
              <EllipsisIcon size={20} className="text-neutral-500" />
            </div>

            {tweet?.content && <div>{tweet.content}</div>}

            {tweet?.image_url && (
              <div className="w-full h-[50vh] rounded-md overflow-hidden relative">
                <img src={tweet.image_url} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-1"><MessageCircle size={20} />2.7k</div>
              <div className="flex items-center gap-1"><Repeat size={20} />3k</div>
              <div className="flex items-center gap-1"><Heart size={20} />13k</div>
              <div className="flex items-center gap-1"><ChartNoAxesColumnIncreasing size={20} />434k</div>
              <Bookmark size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* <ReplyPost />
      <Comments />
      <Comments /> */}
    </div>
  )
}
