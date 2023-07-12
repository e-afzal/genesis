// STYLES
import styles from "@/public/styles/brand/brand.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import GlanceAccordion from "../components/brand/GlanceAccordion";
import Footer from "../components/Footer";

// ASSET IMPORT
import space from "@/public/images/brand/overview/space.jpg";
import membership from "@/public/images/brand/overview/membership.jpg";
import partnership from "@/public/images/brand/overview/partnership.jpg";
import Image from "next/image";

const Overview = () => {
  const glanceAccordionData = [
    {
      title: "crest grille",
      description:
        "The Genesis signature Crest grille is inspired by the emblem’s crest, emphasizing the distinct identity of Genesis.",
      imageUrl: "/images/brand/overview/glance_1.jpg",
    },
    {
      title: "quad lamps",
      description:
        "The Quad lights are inspired by the wings of the emblem. When viewed from the side, the iconic two lines clearly display the Genesis identity whether day or night. ",
      imageUrl: "/images/brand/overview/glance_2.jpg",
    },
    {
      title: "parabolic line",
      description:
        "A single line defines the side. We call this the Parabolic line and perfectly highlights the reductive design that elevates the purity of the Athletic Elegance design philosophy.",
      imageUrl: "/images/brand/overview/glance_3.jpg",
    },
    {
      title: "beauty of white space",
      description:
        "Inspired by Korean architecture, “Beauty of White Space” defines the interior design. Perfectly balancing personal space and state of the art technology.",
      imageUrl: "/images/brand/overview/glance_4.jpg",
    },
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: BRAND SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.video_container}>
            <video
              src="/images/brand/overview/starry_sky.mp4"
              autoPlay
              loop
            ></video>
          </div>
          <div className={styles.showcase_content}>
            <h1>genesis brand</h1>
            <p>
              The Genesis brand embraces creation and believes that every drive
              deserves to be a grand discovery.
            </p>
          </div>
        </section>

        {/* SECTION: VISION */}
        <section id={styles.vision}>
          <div className={styles.vision_background}></div>
          <div className={styles.vision_content}>
            <h3 className={styles.vision_title}>our vision and mission</h3>
            <p className={styles.vision_description}>
              we strive to create the finest automobiles and related products
              and services for connoisseurs around the world.
            </p>
          </div>
        </section>

        {/* SECTION: ELEGANCE */}
        <section id={styles.elegance}></section>

        {/* SECTION: DESIGN */}
        <section id={styles.design}>
          <h2 className={styles.design_title}>genesis design</h2>

          <div className={styles.video_container}>
            <video
              src="/images/brand/overview/design.mp4"
              type="video/mp4"
              controls
              autoPlay
              loop
            />
          </div>
        </section>

        {/* SECTION: DESIGN AT A GLANCE */}
        <section id={styles.glance}>
          <h2 className={styles.glance_title}>design at a glance</h2>

          <GlanceAccordion styles={styles} data={glanceAccordionData} />
        </section>

        {/* SECTION: TALKING DESIGN */}
        <section id={styles.talking}>
          <h2 className={styles.talking_title}>
            talking design with cco luc donckerwolke
          </h2>
          <div className={styles.video_container}>
            <iframe
              src="https://www.youtube.com/embed/HyZcly54V90"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* SECTION: LIFESTYLE BRAND */}
        <section id={styles.lifestyle}>
          <h2 className={styles.lifestyle_title}>lifestyle brand</h2>

          <div className={styles.lifestyle_image}></div>
          <p className={styles.lifestyle_description}>
            Genesis provides new opportunities to create memorable moments both
            on the road and in our daily lives. The start of this relationship
            is an everlasting one and it is also the source of our inspiration
            and evolution.
          </p>
        </section>

        {/* SPACE */}
        <section id={styles.space}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>space</h2>
              <p className={styles.content_body}>
                Genesis Space highlights the car as the hero and offers a
                variety of experiences including concept car exhibition,
                curation and test drive of Genesis vehicles.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={space} alt="space" />
            </div>
          </div>
        </section>

        {/* MEMBERSHIP */}
        <section id={styles.membership}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>membership</h2>
              <p className={styles.content_body}>
                Meet the membership program that goes with your daily life. We
                provide various benefits from vehicle care to lifestyle care.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image
                width={2880}
                height={1280}
                src={membership}
                alt="membership"
              />
            </div>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section id={styles.partnership}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>partnership</h2>
              <p className={styles.content_body}>
                Meet various partners with Genesis. We introduce a variety of
                programs that share our philosophy and direction.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={partnership} alt="partnership" />
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id={styles.journey}></section>
      </main>
      <Footer />
    </body>
  );
};

export default Overview;
