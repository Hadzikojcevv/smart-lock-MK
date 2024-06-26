import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./locale-switcher";
import Image from "next/image";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-2 bg-custom fixed top-0 left-0 right-0 shadow-xl" style={{zIndex: 99999}}>
      <nav className="m-auto w-11/12 md:w-9/12 flex items-center justify-between text-white">
        <Image
          src={"https://i.imgur.com/z2TvdgM.png"}
          alt="Smart-Lock Logo"
          width={150}
          height={100}
        />
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
