import React from "react";
import Section from "./Reusables/Section";
import SectionTitle from "./Reusables/SectionTitle";
import Listing from "./LatestListing/Listing";
import { locks } from "../Listing/Listing";

const latestListing = [locks[5], locks[6]]

const LatestArivals = ({lang}:any) => {
  return (
    <Section bgColor="#E4E7ED">
      <>
        <SectionTitle
          title={lang.home.redesign.latestArrivals.title}
          preTitle={lang.home.redesign.latestArrivals.subTitle} color={"dark"}/>
        <Listing items={latestListing} cardColor="dark"/>
      </>
    </Section>
  );
};

export default LatestArivals;
