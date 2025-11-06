'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { signUpUser } from '../../../services/auth'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const signup = async(e) => {
        e.preventDefault()

        if(!email || !password) {
            toast.error('Please fill email and password')
            return
        }

        const {error} = await signUpUser(email,password)
        if(error) {
            toast.error(error.message)
            return
        }
        toast.success('Check your email to verify your account')
        setTimeout(() => {
            router.replace('/auth/callback')
        }, 2000)
    }
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
      <div className='md:w-sm w-xs space-y-5'>
        <div className='space-y-5'>
          <div className='text-xl font-bold'>Sign up to X</div>
          <div>
            <Button className='w-full cursor-pointer'>Sign in with Google</Button>
          </div>
        </div>
        <div className='text-center'>or</div>
        <form onSubmit={signup} className='space-y-5'>
          <div><Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div><Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
          <Button className='w-full cursor-pointer' variant={'outline'}>Forgot Password?</Button>
          <div className='text-sm'>Already have an account? <Link href='/' className='font-semibold cursor-pointer'>Sign in</Link></div>
        </form>
      </div>
    </div>
  )
}

export default page