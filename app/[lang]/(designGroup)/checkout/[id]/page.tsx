import CheckoutHero from "@/app/Components/Design/CheckoutPage/CheckoutHero";
import Nav from "@/app/Components/Design/Nav";
import { locks } from "@/app/Components/Listing/Listing";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const CheckoutPage = async ({ params }: { params: { id: string, lang: Locale} }) => {
  
  const lockToRender = locks[+params.id - 1];
  const { page } = await getDictionary(params.lang);

  return (
    <>
      <Nav darkColor />
      <CheckoutHero lock={lockToRender} lang={page}/>
    </>
  );
};

export default CheckoutPage;
