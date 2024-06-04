import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import fb from "../../../../public/fb.png";
import insta from "../../../../public/insta.png";
import letter from "../../../../public/letter.png";
import phone from "../../../../public/phone.png";
import Section from "../Reusables/Section";

const Footer = ({lang}: any) => {
  return (
    <footer className="bg-footerDark xl:px-80 md:px-20">
      <Section bgColor="#474C57">
        <>
          <div className="flex flex-col lg:flex-row justify-between gap-y-4">
            <div className="flex justify-center lg:justify-between items-center gap-x-4">
              <Image src={letter} alt="Letter" width={35} height={35} />
              <div className="text-sm md:text-xl">
                <p>Ask Us Everything</p>
                <a className="underline" href="mailto:contact.smartlocks@gmail.com">contact.smartlocks@gmail.com</a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-between items-center gap-x-4">
              <Image src={phone} alt="Phone" width={35} height={35} />
              <div className="text-sm md:text-xl">
                <p>Call Us</p>
                <a className="underline" href="tel:+38972277766">+38972277766</a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end gap-x-2">
              {/* <a href="">
                <Image src={insta} alt="Instagram" width={35} height={35} />
              </a> */}

              <a href="https://www.facebook.com/profile.php?id=61556796012808" target="_blank">
                <Image src={fb} alt="Facebook" width={35} height={35} />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-x-20 items-center">
            <Image src={logo} alt="Logo" width={200} height={100} />
            <p className="text-sm md:text-xl text-center">
              <span className="text-sm">Adress:</span> Marshal Tito 123, Gevgelija, Macedonia
            </p>
          </div>
        </>
      </Section>
    </footer>
  );
};

export default Footer;
