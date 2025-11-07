import { Bookmark, ChartNoAxesColumnIncreasing, Heart, MessageCircle, Repeat, Trash } from "lucide-react"
import {useUserSession} from "@/custom-hooks/useUserSession"
import { useDeleteTweet } from "../custom-hooks/useTweet"

const TweetActions = ({creatorId,tweetId,imagePath}) => {
    const {session} = useUserSession()
    const userId = session?.user.id
    const {mutate} = useDeleteTweet()
    const handleDeleteTweet = () => {
        mutate({
            tweetId,
            imagePath: imagePath || null,

        })
    }
  return (
     <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-1"><MessageCircle size={20} />2.7k</div>
                <div className="flex items-center gap-1"><Repeat size={20} />3k</div>
                <div className="flex items-center gap-1"><Heart size={20} />13k</div>
                <div className="flex items-center gap-1"><ChartNoAxesColumnIncreasing size={20} />434k</div>
                <div><Bookmark size={20} /></div>
                {creatorId === userId && <div onClick={handleDeleteTweet}><Trash size={20} className="text-red-500 cursor-pointer" /></div>}
            </div>
  )
}

export default TweetActions