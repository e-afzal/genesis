"use client";
//? SHOWCASE CAROUSEL
import Link from "next/link";
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

// STYLES
import styles from "@/public/styles/home.module.scss";

// ASSET IMPORT
import chevron from "@/public/icons/chevron-down-white.svg";

const HomeCarousel = () => {
  const carouselModels = [
    {
      title: "genesis g70",
      caption: "raw force. unleashed.",
      url: "/models/G70",
    },
    {
      title: "genesis g80",
      caption: "creating tomorrow, today.",
      url: "/models/G80",
    },
    {
      title: "genesis g90",
      caption: "unrivalled elegance",
      url: "/models/G90",
    },
    {
      title: "genesis gv70",
      caption: "equipped to perform. designed to inspire.",
      url: "/models/GV70",
    },
    {
      title: "genesis gv80",
      caption: "luxury without limits",
      url: "/models/GV80",
    },
  ];

  return (
    <Swiper
      slidesPerView={"1"}
      centeredSlides
      className={styles.swiper_container}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {carouselModels.map((each, index) => (
        <SwiperSlide key={index} className={styles.swiper_slide}>
          <div className={styles.swiper_content}>
            {/* <h5 className={styles.model_year}>2023</h5> */}
            <h2 className={styles.model_title}>{each.title}</h2>
            <h4 className={styles.model_caption}>{each.caption}</h4>
            <Link href={each.url} className={styles.discover_box}>
              <span className={styles.link_text}>discover more</span>
              <Image
                src={chevron}
                alt="Chevron icon"
                className={styles.model_link_chevron}
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
