import React from "react";
import LocaleSwitcher from "../locale-switcher";
import Image from "next/image";

import logo from "../../../public/logo.png";
import insta from "../../../public/insta.png";
import fb from "../../../public/fb.png";
import Link from "next/link";

type NavPropsType = {
  darkColor?: boolean;
};

const Nav = ({ darkColor = false }: NavPropsType) => {
  return (
    <header className={`${darkColor ? "bg-footerDark" : ""}`}>
      <div
        className={`flex justify-between items-center m-auto w-10/12 lg:w-9/12 py-2 ${
          darkColor ? "bg-footerDark" : ""
        }`}
      >
        <Link href={"/design"}>
          <Image src={logo} alt="Logo" width={120} height={70} />
        </Link>

        <div className="flex justify-end gap-4">
          <div className="flex justify-end items-center gap-x-2">
            <Link href={""}>
              <Image src={insta} alt="Insta" width={20} height={20} />
            </Link>
            <Link href={""}>
              <Image src={fb} alt="Insta" width={20} height={20} />
            </Link>
          </div>

          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Nav;
