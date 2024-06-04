import React from "react";
import Section from "../Reusables/Section";
import SectionTitle from "../Reusables/SectionTitle";
import { locks } from "../../Listing/Listing";
import ProductCard from "../Reusables/ProductCard";

const ProductsListing = () => {
  return (
    <Section bgColor={"#FFFFFF"}>
      <>
        <SectionTitle title="Our Products" preTitle="Smart Locks" color="dark"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 mt-4 md:mt-8">
            {locks.map(lock => <ProductCard key={lock.id} product={lock} color={"light"}/>)}
        </div>
      </>
    </Section>
  );
};

export default ProductsListing;
