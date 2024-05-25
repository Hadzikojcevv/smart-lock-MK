import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import fb from "../../../../public/fb.png";
import insta from "../../../../public/insta.png";
import letter from "../../../../public/letter.png";
import phone from "../../../../public/phone.png";
import Section from "../Reusables/Section";

const Footer = () => {
  return (
    <footer className="bg-footerDark xl:px-80 md:px-20">
      <Section bgColor="#474C57">
        <>
          <div className="flex flex-col lg:flex-row justify-between gap-y-4">
            <div className="flex justify-center lg:justify-between gap-x-4">
              <Image src={letter} alt="Letter" width={50} height={50} />
              <div>
                <p>Ask Us Everything</p>
                <p>contact@domain.com</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-between gap-x-4">
              <Image src={phone} alt="Phone" width={50} height={50} />
              <div>
                <p>Call Us</p>
                <p>+389 070 777 666</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end gap-x-2">
              <a href="">
                <Image src={insta} alt="Instagram" width={50} height={50} />
              </a>

              <a href="">
                <Image src={fb} alt="Facebook" width={50} height={50} />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-x-20 items-center">
            <Image src={logo} alt="Logo" width={200} height={100} />
            <p className="text-xl">
              <span className="text-lg">Adress:</span> Marshal Tito 123, Gevgelija, Macedonia
            </p>
          </div>
        </>
      </Section>
    </footer>
  );
};

export default Footer;
