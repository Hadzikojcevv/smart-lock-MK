import { fontK2dBold, fontKantumruy_Pro, fontK2dRegular } from "./Fonts";
import Nav from "./Nav";



const Hero = () => {
  return (
    <section className=" heroSection">
      <div className="heroOverlay">
        <Nav />
        <div
          className="flex w:11/12 lg:w-9/12 m-auto justify-center lg:justify-start w-full h-full lg:h-2/3 lg:pt-20"
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
            <button
              className={`py-3 px-6 capitalize lg:text-2xl w-8/12 bg-redesignWhite rounded-full text-dark ${fontK2dRegular.className}`}
            >
              View Colection
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
