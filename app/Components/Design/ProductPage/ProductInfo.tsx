"use client";
import { LockType } from "@/app/Types/types";
import {
  fontK2dBold,
  fontKantumruy_ProBold,
  fontKantumruy_ProMedium,
} from "../Fonts";
import Btn from "../Reusables/Btn";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FeatureIcon from "./FeatureIcon";

type ProductInfoPropsType = {
  lock: LockType;
};

const ProductInfo = ({ lock }: ProductInfoPropsType) => {
  const pathname = usePathname();
  const isPathnameEng = pathname.includes("/en");

  return (
    <div className="w-11/12 lg:w-6/12 m-auto lg:ml-0">
      <h1 className={`${fontK2dBold.className} text-5xl lg:text-8xl`}>
        {lock.title}
      </h1>
      <h2
        className={`${fontKantumruy_ProBold.className} uppercase text-2xl md:text-3xl lg:text-4xl`}
      >
        Smart Locks
      </h2>

      <h3
        className={`${fontK2dBold.className} text-3xl lg:text-5xl mt-8 md:mt-10 lg:mt-12`}
      >
        {" "}
        <span className="text-xl md:text-3xl">Price:</span> {lock.price}
        <span className="text-md md:text-xl">MKD</span>
        
      </h3>

      <p
        className={`${fontKantumruy_ProMedium.className} text-md md:text-lg lg:text-xl mt-4`}
      >
        {isPathnameEng ? lock.descriptionEng : lock.description}
      </p>
      <div className="flex flex-col gap-2 my-4 md:my-8 lg:my-6">
        <p className={`text-xl md:text-3xl ${fontK2dBold.className}`}>
          Features:
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 gap-4">
          {lock.desc.map((icon) => (
            <FeatureIcon
              key={icon.title}
              icon={icon.icon}
              text={icon.titleEng}
            />
          ))}
        </div>
      </div>
      <Link href={`/checkout/${lock.id}`}>
        <Btn text={"Buy Now"} color={"dark"} />
      </Link>
    </div>
  );
};

export default ProductInfo;