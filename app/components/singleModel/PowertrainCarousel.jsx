"use client";

import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const PowertrainCarousel = ({ styles, powertrains }) => {

  return (
    <Swiper
      className={styles.swiper_models_container}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 75
        },
      }}
    >
      <div className="swiper-wrapper">
        {powertrains.map((powertrain, index) => (
          <SwiperSlide
            key={index}
            className={styles.model_slide}
          >
            <div className={styles.powertrain_image_container}>
              <Image
                className={styles.powertrain_image}
                src={`/images/car_models${powertrain.image}`}
                alt={powertrain.title}
                width={400}
                height={225}
              />
            </div>
            <div className={styles.powertrain_content}>
              <h4 className={styles.powertrain_title}>{powertrain.title}</h4>
              <p className={styles.powertrain_msrp}>starting msrp ${powertrain.msrp}</p>
              <ul className={styles.features_list}>
                {powertrain.features.map((feature, index) => (
                  <li key={index} className={styles.feature_list_item}>{feature}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default PowertrainCarousel;