import Form from "@/app/Components/Form/Form";
import Listing from "@/app/Components/Listing/Listing";
import React from "react";
import page from "../page";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

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
