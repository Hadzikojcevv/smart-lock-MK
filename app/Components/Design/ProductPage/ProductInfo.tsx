import { LockType } from "@/app/Types/types";
import React from "react";
import Btn from "../Reusables/Btn";
import Image from "next/image";
import {
  fontK2dBold,
  fontKantumruy_Pro,
  fontKantumruy_ProBold,
  fontKantumruy_ProMedium,
} from "../Fonts";

import logo from "../../../../public/logo.png";

type ProductInfoPropsType = {
  lock: LockType;
};

const ProductInfo = ({ lock }: ProductInfoPropsType) => {
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
      </h3>
      <p
        className={`${fontKantumruy_ProMedium.className} text-md md:text-lg lg:text-xl`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque
        incidunt? Fugiat delectus autem, magni aperiam sit corporis alias ea.
      </p>
      <div className="flex flex-col gap-2 my-4 md:my-8 lg:my-6">
        <p className={`text-xl md:text-3xl ${fontK2dBold.className}`}>
          Features:
        </p>
        <div className="flex gap-4">
          {lock.desc.map((icon) => (
            <div key={icon.icon}>
              <Image src={icon.icon} alt={icon.title} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
      <Btn text={"Buy Now"} color={"dark"} />
    </div>
  );
};

export default ProductInfo;
