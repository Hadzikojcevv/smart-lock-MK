import Link from "next/link";
import { fontK2dBold, fontKantumruy_Pro, fontK2dRegular } from "./Fonts";
import Nav from "./Nav";



const Hero = () => {
  return (
    <section className=" heroSection">
      <div className="heroOverlay">
        <Nav />
        <div
          className="flex w:11/12 lg:w-9/12 m-auto justify-center lg:justify-start w-full lg:h-2/3 xl2:pt-20 md:pt-2 pt-6"
        >
          <div
            className="text-white w-10/12 lg:w-7/12 m-auto lg:ml-0 text-center lg:text-left relative text-redesignWhite"
          >
            <h1
              className={`text-4xl lg:text-8xl font-bold uppercase ${fontK2dBold.className}`}
            >
              Smart Locks
            </h1>
            <h2
              className={`text-lg lg:text-7xl pb-4 lg:pb-8 ${fontK2dBold.className}`}
            >
              The Future of Security
            </h2>
            <p
              className={`text-md lg:text-3xl pb-4 lg:pb-8 ${fontKantumruy_Pro.className}`}
            >
              For a Better Home & Business Security
            </p>
            
            
            <Link href={'/design/products'}
              className={`w-full py-3 px-6 capitalize lg:text-2xl text-center bg-redesignWhite rounded-full text-dark hover:text-redesignWhite hover:bg-lightestdark ease-in-out transition-colors ${fontK2dRegular.className}`}
            >
              View Colection
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
