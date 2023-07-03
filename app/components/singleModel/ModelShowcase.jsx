"use client";
//? MODEL SHOWCASE CAROUSEL
import Link from 'next/link';
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

// ASSET IMPORT

const ModelShowcaseCarousel = ({ images }) => {
  const carouselModels = [
    { title: "genesis g70", caption: "raw force. unleashed.", url: "#" },
    { title: "genesis g80", caption: "creating tomorrow, today.", url: "#" },
    { title: "genesis g90", caption: "unrivalled elegance", url: "#" },
    { title: "genesis gv70", caption: "equipped to perform. designed to inspire.", url: "#" },
    { title: "genesis gv80", caption: "luxury without limits", url: "#" },
  ];

  return (
    <Swiper
      slidesPerView={"1"}
      centeredSlides
      className={styles.swiper_container}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
    // autoplay={{ delay: 5000 }}
    >
      {images.map((each, index) => (
        <SwiperSlide
          key={index}
          className={styles.swiper_slide}
          style={{ backgroundImage: `url(/images/car_models${each})` }}
        >
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default ModelShowcaseCarousel;