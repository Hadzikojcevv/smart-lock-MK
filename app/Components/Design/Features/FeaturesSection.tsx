import React from "react";
import Section from "../Reusables/Section";
import SectionTitle from "../Reusables/SectionTitle";
import FeaturesCarousell from "./FeaturesCarousell";
import Promo from "./Promo";
import { locks } from "../../Listing/Listing";

const FeaturesSection = ({lang}: any) => {
  return (
    <section className="featuresSection py-8 md:py-8 lg:py-16">
      <SectionTitle
        title={lang.home.redesign.features.title}
        preTitle={lang.home.redesign.features.subTitle}
        color="light"
      />
      <div className="m-auto w-10/12 md:w-8/12 lg:w-6/12 mt-16 flex flex-col lg:flex-row lg:gap-8 gap-4 items-center" >
        <FeaturesCarousell />

        <Promo item={locks[6]} lang={lang}/>
      </div>
    </section>
  );
};

export default FeaturesSection;
