import {
  fontK2dBold,
  fontKantumruy_ProMedium,
} from "@/app/Components/Design/Fonts";
import Footer from "@/app/Components/Design/Footer/Footer";
import Nav from "@/app/Components/Design/Nav";
import Section from "@/app/Components/Design/Reusables/Section";
import SectionTitle from "@/app/Components/Design/Reusables/SectionTitle";
import Image from "next/image";
import React from "react";

import logo from "../../../../public/logo.png";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ConfirmPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <Nav darkColor />
      <Section bgColor={"#F7F7F9"}>
        <>
          <SectionTitle title={page.confirm?.success ?? "Success"} color={"dark"} />
          <div
            className={`${fontK2dBold.className} 
             text-center h-screen flex items-center flex-col pt-8 md:pt-20`}
          >
            <div className="bg-lightDark rounded-lg mb-8">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </div>
            <h3 className="text-3xl md:text-5xl">{page.confirm?.thanks ?? "Thanks For Your Order"}</h3>
            <p className="text-xl md:text-2xl">
              {page.confirm?.msg ?? "Our team will contact you shortly for order confirmation"}
            </p>

            <Link
              href={"/"}
              className={` bg-lightDark text-redesignWhite hover:bg-footerDark px-16 mt-4 py-4 rounded-full text-xl uppercase tracking-tighter shadow-xl transition-colors ease-in-out   ${fontKantumruy_ProMedium.className}`}
            >
              {page.confirm?.btn ?? "Home"}
            </Link>
          </div>
        </>
      </Section>
      <Footer />
    </>
  );
};

export default ConfirmPage;
