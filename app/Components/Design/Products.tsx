import React from 'react'
import SectionTitle from './Reusables/SectionTitle'
import Section from './Reusables/Section'
import ProductsCaro from './ProductsCaro/ProductsCaro'

const Products = ({lang}: any) => {
  return (
    <Section bgColor='#ffffff'>
        <>
        <SectionTitle color='dark' title={lang.home.redesign.productsTitle} />
        <ProductsCaro />
        </>
    </Section>
  )
}

export default Products