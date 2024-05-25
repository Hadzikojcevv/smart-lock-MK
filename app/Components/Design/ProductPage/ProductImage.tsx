import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";


type ProductImagePropsType = {
  image: string;
};

const ProductImage = ({ image }: ProductImagePropsType) => {
  return (
      <div
        className="relative m-auto w-11/12 lg:w-5/12 flex justify-center items-center rounded-md productPageImage py-16">
        <Image src={image} alt={image} width={350} height={400} className="rotate-6"/>
        <div className="bg-lightDark rounded-xl absolute bottom-2 right-2">
          <Image src={logo} alt="Logo" width={125} height={100} />
        </div>
      </div>
  );
};

export default ProductImage;
