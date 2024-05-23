"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { locks } from "../../Listing/Listing";
import ProductCard from "../Reusables/ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductsCaro = () => {
  return (
    <div style={{backgroundColor: '#FFFFFF'}}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        arrows
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
        {locks.map((lock) => (
          <ProductCard key={lock.id} product={lock} color={"light"} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCaro;
