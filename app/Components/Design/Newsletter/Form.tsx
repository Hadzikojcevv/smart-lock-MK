import React from 'react'
import { fontK2dMedium } from '../Fonts'

const Form = () => {
  return (
    <form action="" className='mt-4 md:mt-8 flex '>
        <input type="text" required placeholder='Email*' className={`${fontK2dMedium.className} p-4 rounded-l-full`}/>
        <button type='submit' className={`${fontK2dMedium.className} text-xl text-center rounded-r-full py-4 px-4 md:px-10 bg-footerDark text-redesignWhite hover:bg-lightDark transition-colors ease-in-out`}>Send</button>
    </form>
  )
}

export default Form