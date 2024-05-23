import React from "react";
import Section from "./Reusables/Section";
import SectionTitle from "./Reusables/SectionTitle";
import Listing from "./LatestListing/Listing";
import { locks } from "../Listing/Listing";

const latestListing = [locks[5], locks[6]]

const LatestArivals = () => {
  return (
    <Section bgColor="#E4E7ED">
      <>
        <SectionTitle
          title="Latest Arrivals"
          preTitle="Top New Products This Week"
        />
        <Listing items={latestListing} cardColor="dark"/>
      </>
    </Section>
  );
};

export default LatestArivals;
