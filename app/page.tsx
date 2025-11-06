import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const page = () => {
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
        <div className='space-y-5'>
          <div><Input placeholder='Phone, Email or Username' /></div>
          <Button className='w-full cursor-pointer'>Continue</Button>
          <Button className='w-full cursor-pointer' variant={'outline'}>Forgot Password?</Button>
          <div className='text-sm'>Don't have an account? <Link href='/signup' className='font-semibold cursor-pointer'>Sign up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default page