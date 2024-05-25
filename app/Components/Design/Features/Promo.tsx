import { LockType } from '@/app/Types/types'
import Image from 'next/image'
import React from 'react'
import Btn from '../Reusables/Btn'
import CardTag from '../Reusables/CardTag'
import { fontK2dBold } from '../Fonts'

type PromoPropsType = {
    item: LockType
}

const Promo = ({item}: PromoPropsType) => {
  return (
    <div className='m-auto w-11/12 md:w-5/12 rounded-lg bg-redesignWhite px-8 pt-24 pb-8 flex flex-col items-center relative'>
        <CardTag text={'Face Recognition'} color={'dark'} />
        <h3 className={`text-lg lg:text-4xl ${fontK2dBold.className}`}>{item.title}</h3>
        <Image src={item.cardImage} alt={item.title} width={200} height={200}/>
        <Btn text={'Buy Now'} color={'dark'} />
    </div>
  )
}

export default Promo