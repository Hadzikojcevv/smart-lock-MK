import { LockType } from '@/app/Types/types'
import React from 'react'
import ProductCard from '../Reusables/ProductCard'

type ListingPropsType = {
    items: LockType[],
    cardColor: 'dark' | 'light'
}

const Listing = ({items = [], cardColor = 'dark'}:ListingPropsType) => {
  return (
    <div className='lg:w-10/12 w-full m-auto flex flex-wrap justify-center'>
        {items.map(lock => <ProductCard key={lock.id} product={lock} color={cardColor}/>)}
    </div>
  )
}

export default Listing