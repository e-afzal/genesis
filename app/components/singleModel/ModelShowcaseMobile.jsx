"use client";
//? SHOWCASE CAROUSEL

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

const ModelShowcaseCarouselMobile = ({ image }) => {

  return (
    <Swiper
      slidesPerView={"1"}
      centeredSlides
      className={styles.swiper_container_mobile}
    >
      <SwiperSlide
        className={styles.swiper_slide_mobile}
        style={{ backgroundImage: `url(/images/car_models${image})` }}
      >
      </SwiperSlide>
    </Swiper>
  );
};

export default ModelShowcaseCarouselMobile;