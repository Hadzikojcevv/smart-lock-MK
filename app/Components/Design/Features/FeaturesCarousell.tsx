"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureCard, { FeatureCardType } from "./FeatureCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const features: FeatureCardType[] = [
  {
    image1: "https://i.imgur.com/YLAPPH6.png",
    image2: "https://i.imgur.com/joRBg4u.png",
    image3: "https://i.imgur.com/cn1mKQx.png",
    image4: "https://i.imgur.com/gcmGumt.png",
    desc1: "Fingerprint",
    desc2: "Smart Lock",
    desc3: "Passcode",
    desc4: "NFC Card",
  },
  {
    image1: "https://i.imgur.com/ZKd6FbQ.png",
    image2: "https://i.imgur.com/EqtFpEG.png",
    image3: "https://i.imgur.com/32wj1Jl.png",
    image4: "https://i.imgur.com/Qc2DDfx.png",
    desc1: "Tuya Smart App",
    desc2: "Mechanical Key",
    desc3: "Battery Reminder",
    desc4: "Silent Mode",
  },
  {
    image1: "https://i.imgur.com/uZriFSh.png",
    image2: "https://i.imgur.com/joRBg4u.png",
    image3: "https://i.imgur.com/MShSiSL.png",
    image4: "https://i.imgur.com/QQ3YIfk.png",
    desc1: "WaterProof",
    desc2: "Auto Lock",
    desc3: "3D Face Recognition",
    desc4: "Photo",
  },
  {
    image1: "https://i.imgur.com/M6fs8fD.png",
    image2: "https://i.imgur.com/XcMScoa.png",
    image3: "https://i.imgur.com/l7HccEx.png",
    desc1: "Virtual Spy",
    desc2: "Emergency USB Power",
    desc3: "Remote Unlock From Phone",
  },
];

const FeaturesCarousell = () => {
  return (
    <div className="bg-redesignWhite w-full md-auto md:w-7/12 rounded-lg">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        arrows={false}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        rtl={false}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.image1} item={feature} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturesCarousell;