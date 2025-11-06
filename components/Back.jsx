'use client'
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const Back = () => {
    const router = useRouter()
  return (
     <div onClick={() => router.back()} className='flex items-center gap-2 font-bold text-lg cursor-pointer'><ArrowLeft size={20} />Post</div>
  )
}

export default Back