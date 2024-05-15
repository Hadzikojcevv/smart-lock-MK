import { LockType } from "@/app/Types/types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMobile, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import DescriptionListing from "./DescriptionListing";
import Price from "./Price";

type LockItemProps = {
  lock: LockType;
  index: number;
  lang: any;
  page: 'home' | "products"
};

const LockItem = ({ lock: { title, desc, image, price }, index, lang, page }: LockItemProps) => {
  return (
    <div className={`relative m-auto`}>
      <div className="m-auto w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12 items-center py-12">
        <div
          className={`w-full md:basis-1/2 flex items-center relative my-8 lg:my-0 ${
            index % 2 === 0
              ? "justify-center lg:justify-end "
              : "lg:order-2 justify-center lg:justify-start"
          }`}
        >
          <Image
            src={image}
            alt={title}
            width={title === "D10" ? 550 : 350}
            height={450}
            loading="lazy"
            className="z-10"
          />

          {index % 2 !== 0 && (
            <div className="uniqueDiv rounded-l-3xl absolute right-0"></div>
          )}
        </div>

        <div
          className={`basis-full md:basis-1/2 flex m-auto w-11/12 lg:w-full justify-center items-center ${
            index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          <div className={`w-11/12 md:w-9/12 lg:w-7/12 flex flex-col gap-4 `}>
            <div className="flex flex-col justify-between items-start gap-4">
              <h2 className="uppercase font-semibold text-5xl lg:text-7xl tracking-tighter basis-1/2">
                {title}
              </h2>
            </div>

              <DescriptionListing items={desc} lang={lang}/>

            {page === 'products' && <Price price={price} lang={lang}/>}
              
            
            <Link
              href={"#form"}
              className="py-4 px-8 font-semibold uppercase bg w-fit rounded-full text-color border-2 hover:border-custom hover:text-custom hover:bg-bg-light transition-colors ease-in-out "
            >
              {lang.home.btn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockItem;
