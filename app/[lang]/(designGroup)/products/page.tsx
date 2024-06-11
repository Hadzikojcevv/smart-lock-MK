import Form from "@/app/Components/Form/Form";
import Listing from "@/app/Components/Listing/Listing";
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
      <Listing lang={page} page="products"/>
      <Form lang={page} />
    </>
  );
};

export default ProductsPage;
