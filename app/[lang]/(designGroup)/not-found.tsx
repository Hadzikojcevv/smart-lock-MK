import Link from "next/link";
import React from "react";

import logo from "../../../public/logo.png";
import {
  fontK2dBold,
  fontKantumruy_ProMedium,
} from "@/app/Components/Design/Fonts";
import Nav from "@/app/Components/Design/Nav";
import Section from "@/app/Components/Design/Reusables/Section";
import SectionTitle from "@/app/Components/Design/Reusables/SectionTitle";
import Image from "next/image";
import Footer from "@/app/Components/Design/Footer/Footer";

const Error404Page = () => {
  return (
    <>
      <Nav darkColor />
      <Section bgColor={"#F7F7F9"}>
        <>
          <SectionTitle title={"Page Not Found"} color={"dark"} />
          <div
            className={`${fontK2dBold.className} 
             text-center h-screen flex items-center flex-col pt-8 md:pt-32`}
          >
            <div className="bg-lightDark rounded-lg mb-8">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </div>
            <h3 className="text-3xl md:text-5xl">This Page is Non Existant</h3>
            <p className="text-xl md:text-2xl">
              Please return to the home page.
            </p>

            <Link
              href={"/design"}
              className={` bg-lightDark text-redesignWhite hover:bg-footerDark px-16 mt-4 py-4 rounded-full text-xl uppercase tracking-tighter shadow-xl transition-colors ease-in-out   ${fontKantumruy_ProMedium.className}`}
            >
              Home
            </Link>
          </div>
        </>
      </Section>
      <Footer />
    </>
  );
};

export default Error404Page;
