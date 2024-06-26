import Image from "next/image";

import { fontK2dBold } from "../Fonts";

export type FeatureCardType = {
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  desc1: string;
  desc1Eng: string;

  desc2: string;
  desc2Eng: string;

  desc3?: string;
  desc3Eng?: string;

  desc4?: string;
  desc4Eng?: string;

};

type FeatureCardPropsType = {
  item: FeatureCardType;
};

const FeatureCard = ({
  item: { image1, image2, image3, image4, desc1, desc2, desc3, desc4 },
}: FeatureCardPropsType) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-8 lg:gap-y-24 p-8">
      <div className="flex flex-col items-center justify-center">
        <Image src={image1} alt={desc1} width={100} height={100} />
        <p className={`${fontK2dBold.className} text-lg lg:text-xl text-center`}>{desc1}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={image2} alt={desc2} width={100} height={100} />
        <p className={`${fontK2dBold.className} text-lg lg:text-xl text-center`}>{desc2}</p>
      </div>
      {image3 && <div className="flex flex-col items-center justify-center">
        <Image src={image3} alt={desc3 ?? "Image"} width={100} height={100} />
        <p className={`${fontK2dBold.className} text-lg lg:text-xl text-center`}>{desc3}</p>
      </div>}
      {image4 && <div className="flex flex-col items-center justify-center">
        <Image src={image4} alt={desc4 ?? "image"} width={100} height={100} />
        <p className={`${fontK2dBold.className} text-lg lg:text-xl text-center`}>{desc4}</p>
      </div>}
      
    </div>
  );
};

export default FeatureCard;
