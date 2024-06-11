import FeaturesSection from '@/app/Components/Design/Features/FeaturesSection';
import Footer from '@/app/Components/Design/Footer/Footer';
import Hero from '@/app/Components/Design/Hero';
import LatestArivals from '@/app/Components/Design/LatestArivals';
import Products from '@/app/Components/Design/Products';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const DesignPage = async ({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) => {

  const { page } = await getDictionary(lang);

  return (
    <>
        <Hero lang={page}/>
        <Products lang={page}/>
        <LatestArivals lang={page}/>
        <FeaturesSection />
        {/* <Newsletter /> */}
        <Footer lang={page}/>
    </>
  )
}

export default DesignPage