import CheckoutHero from "@/app/Components/Design/CheckoutPage/CheckoutHero";
import Footer from "@/app/Components/Design/Footer/Footer";
import Nav from "@/app/Components/Design/Nav";
import Section from "@/app/Components/Design/Reusables/Section";
import { locks } from "@/app/Components/Listing/Listing";
import React from "react";

const CheckoutPage = ({ params }: { params: { id: string } }) => {
  const lockToRender = locks[+params.id - 1];

  return (
    <>
      <Nav darkColor/>
        <CheckoutHero lock={lockToRender}/>
      <Footer />
    </>
  );
};

export default CheckoutPage;
