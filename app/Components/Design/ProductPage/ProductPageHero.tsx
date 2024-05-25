import React from 'react'
import Section from '../Reusables/Section'
import ProductInfo from './ProductInfo'
import { LockType } from '@/app/Types/types'
import ProductImage from './ProductImage'

type ProductPageHeroPropsType = {
    lock: LockType
}

const ProductPageHero = ({lock}: ProductPageHeroPropsType) => {
  return (
    <Section bgColor='#E9E9EA'>
        <div className='flex flex-col lg:flex-row gap-y-8'>
            <ProductInfo lock={lock}/>
            <ProductImage image={lock.image}/>
        </div>
    </Section>
  )
}

export default ProductPageHero