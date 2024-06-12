'use client'
import React from 'react'
import Section from '../Reusables/Section'
import SectionTitle from '../Reusables/SectionTitle'
import ProductImage from '../ProductPage/ProductImage'
import { LockType } from '@/app/Types/types'
import CheckoutForm from './CheckoutForm'
import { usePathname } from 'next/navigation'

type CheckoutHeroPropsType = {
    lock:LockType
}

const CheckoutHero = ({lock}: CheckoutHeroPropsType) => {

    const pathname = usePathname()
    const isPathEng = pathname.includes('/en')

  return (
    <>
        <Section bgColor="#E9E9EA"> 
            <>
                <SectionTitle title={isPathEng ? 'Checkout' : 'Плаќање'} color={'dark'} />

                <div className='flex flex-col lg:flex-row justify-between md:mt-8  mt-4'>
                    <CheckoutForm lock={lock}/>
                    <ProductImage image={lock.image} />
                </div>
            </>
        </Section>
    </>
  )
}

export default CheckoutHero