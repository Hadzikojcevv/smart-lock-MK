
// import LoginForm from '@/app/Components/Design/AdminPanel/LoginForm'
import Image from 'next/image'
import React from 'react'

import dynamic from 'next/dynamic'
 
const LoginForm = dynamic(() => import('@/app/Components/Design/AdminPanel/LoginForm'), {
  ssr: false,
})

const LoginPage = () => {
  return (
    <section className='w-11/12 m-auto lg:w-6/12 flex justify-center items-center flex-col gap-y-6 h-screen'>
      <div>
      <Image
          src={'https://i.imgur.com/z2TvdgM.png'}
          alt='Logo'
          width={150}
          height={50}
        />
      <h1 className='pt-2 text-2xl font-semibold uppercase tracking-widest text-neutral-700 text-center'>Login</h1>

      </div>
      <LoginForm />
    </section>
  )
}

export default LoginPage