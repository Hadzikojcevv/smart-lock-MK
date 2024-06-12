import Nav from "@/app/Components/Design/Nav";
import ProductsListing from "@/app/Components/Design/Products/ProductsListing";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ProductsPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <Nav darkColor />
      <ProductsListing lang={page}/>
    </>
  );
};

export default ProductsPage;
