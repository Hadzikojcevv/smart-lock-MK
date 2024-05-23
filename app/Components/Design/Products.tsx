import React from 'react'
import SectionTitle from './Reusables/SectionTitle'
import Section from './Reusables/Section'
import ProductsCaro from './ProductsCaro/ProductsCaro'

const Products = () => {
  return (
    <Section bgColor='#ffffff'>
        <>
        <SectionTitle color='dark' title='Products' />
        <ProductsCaro />
        </>
    </Section>
  )
}

export default Products