'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signInUser } from '@/services/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase-client'

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signIn = async (e) => {
    e.preventDefault() 
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }
    const { error } = await signInUser(email, password)
    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('Welcome back!')
    setTimeout(() => {
      router.replace('/auth/callback')
    }, 2000)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({data:{session}}) => {
      if(session) {
        router.replace('/auth/callback')
      }
    })
  },[])
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
      <div className='md:w-sm w-xs space-y-5'>
        <div className='space-y-5'>
          <div className='text-xl font-bold'>Sign in to X</div>
          <div>
            <Button className='w-full cursor-pointer'>Sign in with Google</Button>
          </div>
        </div>
        <div className='text-center'>or</div>
        <form onSubmit={signIn} className='space-y-5'>
          <div><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /></div>
          <div><Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
          <Button className='w-full cursor-pointer' variant={'outline'}>Forgot Password?</Button>
          <div className='text-sm'>Don't have an account? <Link href='/auth/signup' className='font-semibold cursor-pointer'>Sign up</Link></div>
        </form>
      </div>
    </div>
  )
}

export default page