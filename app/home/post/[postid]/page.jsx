import Back from '../../../../components/Back'
import { Bookmark, ChartNoAxesColumnIncreasing, EllipsisIcon, Heart, MessageCircle, Repeat } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ReplyPost from '../../../../components/ReplyPost'

const page = () => {
  return (
    <div className='w-[55.4vw]'>
        <div className='flex justify-between items-center py-3 border-b pl-15 pr-5'>
            <Back />            
            <div className='text-neutral-500'>Reply</div>
        </div>
        <div className='pl-15 pr-5 border-b'>
            <div className="flex items-start justify-start gap-3 py-5">
                <div>
                    <Avatar className='size-10'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="space-y-2 w-full">
                    <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-end">
                        <div>Sumona</div>
                        <div className="text-sm text-neutral-500">@sumona</div>
                        <div className="text-neutral-500">•</div>
                        <div className="text-sm text-neutral-500">22h</div>
                    </div>
                    <div>
                        <EllipsisIcon size={20} className="text-neutral-500" />
                    </div>
                </div>
                <div>
                    <div className='w-full h-[50vh] rounded-md overflow-hidden relative'>
                    <img src="https://github.com/shadcn.png" className='w-full h-full object-cover' />
                </div>
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-1"><MessageCircle size={20} />2.7k</div>
                    <div className="flex items-center gap-1"><Repeat size={20} />3k</div>
                    <div className="flex items-center gap-1"><Heart size={20} />13k</div>
                    <div className="flex items-center gap-1"><ChartNoAxesColumnIncreasing size={20} />434k</div>
                    <div><Bookmark size={20} /></div>
                </div>
                </div>
            </div>
        </div>
        <div>
            <ReplyPost />
        </div>
    </div>
  )
}

export default page