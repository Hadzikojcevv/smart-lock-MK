import React from 'react'
import LocaleSwitcher from '../locale-switcher'
import Image from 'next/image'

import logo from '../../../public/logo.png'

const Nav = () => {
  return (
    <div className='flex justify-between items-center m-auto w-10/12 lg:w-9/12 py-2'>
        <Image src={logo} alt='Logo' width={120} height={70}/>
        <LocaleSwitcher />
    </div>
  )
}

export default Nav