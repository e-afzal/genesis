"use client";
//? MODEL SHOWCASE CAROUSEL

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

const ModelShowcaseCarousel = ({ images, modelName, caption }) => {
  return (
    <Swiper
      slidesPerView={"1"}
      centeredSlides
      className={styles.swiper_container}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{
          backgroundImage: `url(/images/car_models/${modelName}/showcase-desktop_1.jpg)`,
        }}
      >
        <div className={styles.swiper_content}>
          <h2 className={styles.model_title}>{`genesis ${modelName}`}</h2>
          <h4 className={styles.model_caption}>{caption}</h4>
        </div>
      </SwiperSlide>

      {images.slice(1).map((each, index) => (
        <SwiperSlide
          key={index}
          className={styles.swiper_slide}
          style={{ backgroundImage: `url(/images/car_models${each})` }}
        >
          {/* <div className={styles.swiper_content}>
            <h2 className={styles.model_title}>{`genesis ${modelName}`}</h2>
            <h4 className={styles.model_caption}>{caption}</h4>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ModelShowcaseCarousel;
