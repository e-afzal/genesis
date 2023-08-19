"use client";

//? HOMEPAGE: OUR MODELS SECTION
import Link from "next/link";
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// DATA
import models from "@/app/data/models";

const HomeCarCarousel = ({ styles }) => {
  return (
    <Swiper
      className={styles.swiper_models_container}
      slidesPerView={"3"}
      centeredSlides
      spaceBetween={40}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        650: {
          slidesPerView: 1.5,
          spaceBetween: 65,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 75,
        },
      }}
    >
      {models.map((model, index) => (
        <SwiperSlide key={index} className={styles.model_slide}>
          <Link
            href={`/models/${model.modelName}`}
            key={index}
            className={`${styles.nav_dialog_card}`}
          >
            <div className={styles.model_content}>
              <Image
                src={model.image_url}
                className={styles.card_model_image}
                alt={model.modelName}
                width={500}
                height={282}
                priority
                // width={330}
                // height={186}
              />
              <span className={styles.car_year}>{model.year}</span>
              <h3 className={styles.car_model_name}>{model.modelName}</h3>
              {/* <p className={styles.car_model_price}>STARTING AT <span>{`$${model.price}`}</span></p> */}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarCarousel;
