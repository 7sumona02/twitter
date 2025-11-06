'use client'

import CreatePost from "../../components/CreatePost"
import Posts from "../../components/Posts"

const page = () => {
  return (
    <div className="w-[55.4vw] min-h-screen flex flex-col">
        <div className="w-full flex items-center border-b">
            <div className="flex-1 font-bold cursor-pointer hover:bg-neutral-100 py-3 text-center">For you</div>
            <div className="flex-1 font-bold cursor-pointer hover:bg-neutral-100 text-center py-3">Following</div>
        </div>
       <div className="w-full">
         <CreatePost />
         <Posts />
       </div>
    </div>
  )
}

export default page