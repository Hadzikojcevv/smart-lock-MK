import React from "react";
import Btn from "./Btn";
import { LockType } from "@/app/Types/types";
import CardTag from "./CardTag";
import Blob from "./Blob";
import Image from "next/image";
import { fontK2dBold, fontK2dMedium } from "../Fonts";
import blobWhite from "../../../../public/blobWhite.png"
import blobDark from "../../../../public/blobDark.png"

type ProductCardPropsType = {
  product: LockType;
  color: "light" | "dark";
};

const ProductCard = ({ product, color = "light" }: ProductCardPropsType) => {
  return (
    <div className="p-6">
      <div
        className={`relative flex justify-between items-center py-8 pl-4 pr-2 rounded-md shadow-xl ${
          color === "light" ? "bg-lightestdark" : "bg-lightDark"
        } `}
        style={{ border: "1px solid #3A3C41", minHeight: "300px" }}
      >
        <div
          className={`${
            color === "light" ? "text-darkText" : "text-redesignWhite"
          }`}
        >
          <CardTag text="Tag" color={color === "light" ? "dark" : "light"} />
          <h3 className={`text-4xl ${fontK2dBold.className}`}>
            {product.title}
          </h3>
          <p className={`text-lg mb-4  ${fontK2dMedium.className}`}>
            Price:{" "}
            <span
              className={`text-3xl ${
                color === "light" ? "text-lightDark" : "text-lightestDark"
              }  ${fontK2dMedium.className}`}
            >
              {product.price.toLocaleString('en-EN')}
            </span>
          </p>
          <Btn text={"Details"} color={color === "light" ? "dark" : "light"} />
        </div>
    

        <div className="">
          <Image
            src={product.cardImage}
            alt={product.title}
            width={250}
            height={200}
            // className="absolute top-0 z-50"
          />
          
          {/* <Blob color={color} /> */}
        </div>

        <Image
            src={color === "light" ? blobDark : blobWhite}
            alt="Blob"
            width={300}
            height={200}
            className="absolute -z-30"
            style={{ top: 0 , right: 0}}
          />
      </div>
    </div>
  );
};

export default ProductCard;