import Image from 'next/image'
import React from 'react'
import { fontK2dMedium } from '../Fonts'

type FeatureIconPropsType = {
    icon: string,
    text: string
}

const FeatureIcon = ({icon, text}: FeatureIconPropsType) => {
  return (
    <div className='flex flex-col items-center'>
        <Image src={icon} alt={text} width={50} height={50}/>
        <p className={`${fontK2dMedium.className} text-center text-sm`}>{text}</p>
    </div>
  )
}

export default FeatureIcon