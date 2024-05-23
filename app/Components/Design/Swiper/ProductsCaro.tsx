'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination } from 'swiper/modules';
import { locks } from '../../Listing/Listing';
import Image from 'next/image';


const ProductsCaro = () => {
  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {locks.map(lock => <SwiperSlide key={lock.id} className='flex justify-center items-center' style={{border:'2px solid red', height:'150px'}}>
            <div className='flex justify-center items-center'>
                <Image src={lock.image} alt={lock.title} width={70} height={70} style={{border:'2px solid red'}}/>
            </div>
        </SwiperSlide>)}
      </Swiper>
    </>
  )
}

export default ProductsCaro