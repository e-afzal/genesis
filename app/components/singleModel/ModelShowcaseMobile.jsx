"use client";
//? SHOWCASE CAROUSEL

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

const ModelShowcaseCarouselMobile = ({ image, modelName, caption }) => {

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
        <div className={styles.swiper_content}>
          <h2 className={styles.model_title}>{`genesis ${modelName}`}</h2>
          <h4 className={styles.model_caption}>{caption}</h4>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ModelShowcaseCarouselMobile;