'use client'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Calendar, ImageIcon, MapPin, SmileIcon, X } from 'lucide-react'
import { useRef, useState } from 'react'

const CreatePost = () => {
    const [post, setPost] = useState('')
    const isDisabled = post.trim() === ""
    const fileRef = useRef(null)

    const [imagePreview, setImagePreview] = useState(null)

    const handleImageClick = () => {
        fileRef.current?.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file))
        }
    }
    return (
        <div className="flex flex-col items- justify-start mt-5 border-b pb-5 w-[55.4vw] pl-20 pr-5 space-y-5">
            <div className="w-full flex gap-1 ">
                <div>
                    <Avatar className='size-10'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div><Textarea value={post} onChange={(e) => setPost(e.target.value)} className='border-none shadow-none w-[45vw] focus:outline-none focus:ring-0' placeholder='What is happening?' /></div>
            </div>
            {imagePreview && <div className='w-full h-[50vh] rounded-md overflow-hidden relative'>
                <img src={imagePreview} className='w-full h-full object-cover' />
                <div onClick={() => setImagePreview(null)} className='absolute top-3 right-3 bg-white/50 p-2 rounded-full cursor-pointer'><X size={20} /></div>
            </div>}
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <Input type='file' ref={fileRef} className='hidden' onChange={handleFileChange} /><ImageIcon size={20} className='cursor-pointer' onClick={handleImageClick} />
                    <div><SmileIcon size={20} className='cursor-pointer' /></div>
                    <div><MapPin size={20} className='cursor-pointer' /></div>
                    <div><Calendar size={20} className='cursor-pointer' /></div>
                </div>
                <div>{isDisabled ? <Button className='cursor-pointer' disabled>Post</Button> : <Button className='cursor-pointer'>Post</Button>}</div>
            </div>
        </div>
    )
}

export default CreatePost
