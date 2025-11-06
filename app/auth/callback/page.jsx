'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase-client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const page = () => {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        //check if registered
        const handleAuth = async() => {
           const {error,data:{user}} = await supabase.auth.getUser()

           if(!user || error) {
            router.replace('/auth/signup')
            return
           }

           //check if already has profile
           const {data:profile, error:profileError} = await supabase.from('profiles').select('*').eq('id',user.id).maybeSingle()
           if(profileError){
             router.replace('/auth/signup')
             return
           }
           if(profile){
             router.replace('/')
           }
        }
        handleAuth()
    },[router])

    const setupUserProfile = async(e) => {
        e.preventDefault()

        if(!name || !username || !image){
            toast.error('Please fill in all fields')
            return
        }
    }
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
      <div className='md:w-sm w-xs space-y-5'>
        <div className='space-y-5'>
          <div className='text-xl font-bold'>Setup Profile</div>
        </div>
        <form onSubmit={setupUserProfile} className='space-y-5'>
          <div><Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name' /></div>
          <div><Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' /></div>
          <div className='space-y-2'><Label>Avatar</Label><Input accept='image/*' onChange={(e) => setImage(e.target.files[0])} type='file' id='avatar' /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
        </form>
      </div>
    </div>
  )
}

export default page