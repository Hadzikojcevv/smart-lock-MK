import React from "react";
import Section from "../Reusables/Section";
import SectionTitle from "../Reusables/SectionTitle";
import FeaturesCarousell from "./FeaturesCarousell";
import Promo from "./Promo";
import { locks } from "../../Listing/Listing";

const FeaturesSection = () => {
  return (
    <section className="featuresSection py-4 md:py-8 lg:py-16">
      <SectionTitle
        title={"Features"}
        preTitle="Technology Security System"
        color="light"
      />
      <div className="m-auto w-10/12 md:w-8/12 lg:w-6/12 mt-16 flex flex-col lg:flex-row lg:gap-8 gap-4 items-center" >
        <FeaturesCarousell />

        <Promo item={locks[6]} />
      </div>
    </section>
  );
};

export default FeaturesSection;
