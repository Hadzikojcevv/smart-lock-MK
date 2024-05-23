import React from 'react'

type PricePropsType = {
    price: number,
    lang: any
}

const Price = ({price, lang}: PricePropsType) => {

  return (
    <div>
        <p className='lg:text-3xl text-lg font-bold uppercase'>{lang.home.priceTag}: <span className='lg:text-5xl text-3xl underline'>{price}</span> <span className='lowercase'>{lang.home.taxTag}</span> </p>
    </div>
  )
}

export default Price