'use client'

import CreatePost from "../../components/CreatePost"
import Posts from "../../components/Posts"

const page = () => {
  return (
    <div className="w-[55.4vw] min-h-screen flex flex-col">
        <div className="w-full grid grid-cols-2 place-items-center px-20 py-3 border-b">
            <div className="font-bold cursor-pointer">For you</div>
            <div className="font-bold cursor-pointer">Following</div>
        </div>
       <div className="w-full">
         <CreatePost />
         <Posts />
       </div>
    </div>
  )
}

export default page