'use client'

import { Avatar, AvatarImage } from './ui/avatar'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Calendar, ImageIcon, MapPin, SmileIcon, X } from 'lucide-react'
import { useRef, useState } from 'react'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import {useGetUser} from '@/custom-hooks/useGetUser'
import { Skeleton } from "@/components/ui/skeleton"

const CreatePost = () => {
    const [post, setPost] = useState('')
    const [imagePreview, setImagePreview] = useState(null)
    const [showPicker, setShowPicker] = useState(false)
    const isDisabled = post.trim() === "" && !imagePreview
    const fileRef = useRef(null)
    const {loading, session, profile} = useGetUser()

    const handleImageClick = () => {
        fileRef.current?.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const onEmojiClick = (emojiObject) => {
        setPost(post + emojiObject.emoji)
    }

    if (!session) return null
    if(!profile) return null
    if (loading) return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
    return (
        <div className="flex flex-col justify-start mt-5 border-b pb-5 w-[55.4vw] pl-20 pr-5 space-y-5">
            <div className="w-full flex gap-1 ">
                <div>
                     <Avatar className="size-10">
                          {profile?.avatar_url && <AvatarImage src={profile.avatar_url} />}
                    </Avatar>
                </div>
                <div><Textarea value={post} onChange={(e) => setPost(e.target.value)} className='border-none shadow-none w-[45vw] focus:outline-none focus:ring-0' placeholder='What is happening?' /></div>
            </div>
            {imagePreview && <div className='w-full h-[50vh] rounded-md overflow-hidden relative'>
                <img src={imagePreview} className='w-full h-full object-cover' />
                <div onClick={() => setImagePreview(null)} className='absolute top-3 right-3 bg-white/50 p-2 rounded-full cursor-pointer'><X size={20} /></div>
            </div>}
            <div className='w-full flex justify-between items-center relative'>
                <div className='flex gap-3 items-center'>
                    <Input type='file' ref={fileRef} className='hidden' onChange={handleFileChange} /><ImageIcon size={20} className='cursor-pointer' onClick={handleImageClick} />
                    <div onClick={() => setShowPicker(!showPicker)}><SmileIcon size={20} className='cursor-pointer' /></div>
                    <div><MapPin size={20} className='cursor-pointer' /></div>
                    <div><Calendar size={20} className='cursor-pointer' /></div>
                </div>
                {showPicker && <div className='absolute left-0 top-[6vh] w-full z-10'><EmojiPicker onEmojiClick={onEmojiClick} theme={Theme.LIGHT} style={{width: '100%'}} /></div>}
                <div>{isDisabled ? <Button className='cursor-pointer select-none' disabled>Post</Button> : <Button className='cursor-pointer select-none'>Post</Button>}</div>
            </div>
        </div>
    )
}

export default CreatePost
