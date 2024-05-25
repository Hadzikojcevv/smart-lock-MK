import FeaturesSection from '@/app/Components/Design/Features/FeaturesSection';
import Footer from '@/app/Components/Design/Footer/Footer';
import Hero from '@/app/Components/Design/Hero';
import LatestArivals from '@/app/Components/Design/LatestArivals';
import Newsletter from '@/app/Components/Design/Newsletter/Newsletter';
import Products from '@/app/Components/Design/Products';
import ProductsCaro from '@/app/Components/Design/Swiper/ProductsCaro';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import React from 'react'

const DesignPage = async ({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) => {

  const { page } = await getDictionary(lang);


  return (
    <>
        <Hero />
        <Products />
        <LatestArivals />
        <FeaturesSection />
        <Newsletter />
        <Footer />
    </>
  )
}

export default DesignPage