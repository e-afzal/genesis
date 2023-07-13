// STYLE
import styles from "@/public/styles/brand/events.module.scss";

// COMPONENTS
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Image from "next/image";

// ASSET IMPORT
import reddot from "@/public/images/brand/motorshow/red_dot.png";
import showOne from "@/public/images/brand/motorshow/seoul_2023.jpg";
import showTwo from "@/public/images/brand/motorshow/seoul_2021.jpg";
import showThree from "@/public/images/brand/motorshow/guangzhou_2021.jpg";
import showFour from "@/public/images/brand/motorshow/shanghai_2021.jpg";

const Events = () => {
  const galleryItems = [
    { imageUrl: "/images/brand/motorshow/gallery_1.jpg" },
    { imageUrl: "/images/brand/motorshow/gallery_2.jpg" },
    { imageUrl: "/images/brand/motorshow/gallery_3.jpg" },
    { imageUrl: "/images/brand/motorshow/gallery_4.jpg" },
    { imageUrl: "/images/brand/motorshow/gallery_5.jpg" },
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_image}></div>
          <h2 className={styles.showcase_title}>genesis motor shows</h2>
        </section>

        {/* SECTION: RED DOT AWARD */}
        <section id={styles.award}>
          <div className={styles.award_container}>
            <div className={styles.content_image_container}>
              <Image src={reddot} alt="Red Dot Awards Logo" />
            </div>
            <div className={styles.award_content}>
              <h2 className={styles.award_title}>
                Red Dot Award 2018 Communication Design
              </h2>
              <p className={styles.award_description}>
                The award winning Genesis booth design has been recognized for
                its unique design, elegance and beauty.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: SHOW 2023 SEOUL */}
        <section id={styles.showOne}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>electrified future</h2>
              <h3 className={styles.subtitle}>Seoul Mobility Show 2023</h3>
              <p className={styles.content_body}>
                Explore the future of mobility at the 2023 Seoul Mobility Show,
                where Genesis showcased its X TRILOGY concepts. The uniquely
                Korean-inspired designs and the latest EV innovations were on
                full display at the exhibition.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={showOne} alt="Seoul Mobility Show 2023" />
            </div>
          </div>
        </section>

        {/* SECTION: 2021 SEOUL */}
        <section id={styles.showTwo}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>vision for electrification</h2>
              <h3 className={styles.subtitle}>Seoul Mobility Show 2021</h3>
              <p className={styles.content_body}>
                Genesis showcases its EV lineup, from the Electrified GV70 to
                the Genesis X Concept Car and GV60, at the Seoul Mobility Show
                2021.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={showTwo} alt="Seoul Mobility Show 2021" />
            </div>
          </div>
        </section>

        {/* SECTION: 2021 GUANGZHOU */}
        <section id={styles.showThree}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>
                World Premiere of Genesis Electrified GV70
              </h2>
              <h3 className={styles.subtitle}>Auto Guangzhou</h3>
              <p className={styles.content_body}>
                Genesis hosted the world premiere of the Genesis Electrified
                GV70 during our brand debut at Auto Guangzhou 2021.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={showThree} alt="Auto Guangzhou 2021" />
            </div>
          </div>
        </section>

        {/* SECTION: 2021 SHANGHAI */}
        <section id={styles.showFour}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>
                World Premiere of Genesis Electrified G80
              </h2>
              <h3 className={styles.subtitle}>Auto Shanghai</h3>
              <p className={styles.content_body}>
                Genesis made its first appearance at Auto Shanghai 2021, where
                it held a world premiere of the Genesis Electrified G80 and the
                Asia premiere of the Genesis X Concept, marking a historic
                moment for Genesis.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={showFour} alt="Auto Shanghai 2021" />
            </div>
          </div>
        </section>

        {/* SECTION: MASONRY */}
        <section id={styles.masonry}>
          <div className={styles.gallery_grid}>
            {galleryItems.map((each, index) => (
              <div key={index} className={`${styles.gallery_item_container}`}>
                <div
                  className={styles.gallery_item}
                  style={{
                    backgroundImage: `url(${each.imageUrl})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Events;
