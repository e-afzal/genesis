import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/home.module.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";

// ASSET IMPORT
import g70 from "@/public/images/homepage/showcase_carousel/showcase_g70.jpg";
import g90 from "@/public/images/homepage/featured_models/G90.jpg";
import GV80 from "@/public/images/homepage/featured_models/GV80.jpg";
import G80e from "@/public/images/homepage/featured_models/G80e.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main className={styles.main}>

        {/* SHOWCASE CAROUSEL */}
        <section id={styles.showcase}>
          <Image
            src={g70}
            alt="G70"
            width={1366}
          />
        </section>

        {/* OUR MODELS */}
        <section id={styles.models}>
          <h2 className={styles.models_title}>our models</h2>
          <p className={styles.models_description}>Explore Genesis vehicle line-up with its dynamic yet elegant design and cutting-edge technology</p>
        </section>

        {/* FEATURED GRID */}
        <section id={styles.featured_models}>
          <h2 className={styles.discover_title}>discover the genesis collection</h2>

          <div className={styles.featured_grid}>

            <div className={styles.featured_card}>
              <Image
                src={g90}
                alt="G90 side view"
              />
              <h3 className={styles.featured_model_title}>G90</h3>
              <p className={styles.featured_model_description}>
                Proudly named the 2023 MotorTrend Car of the Year, our all-new flagship G90 is the perfect balance of sophisticated design and athletic elegance.</p>
              <Link href={"#"} className={styles.featured_model_link}>go inside the all-new g90</Link>
            </div>

            <div className={styles.featured_card}>
              <Image
                src={GV80}
                alt="GV80 side view"
              />
              <h3 className={styles.featured_model_title}>GV80</h3>
              <p className={styles.featured_model_description}>Blending the refinement of our luxury sedans with enhanced versatility and cargo capacity, the GV80 adapts to all of life’s adventures.
              </p>
              <Link href={"#"} className={styles.featured_model_link}>experience the gv80</Link>
            </div>

            <div className={styles.featured_card}>
              <Image
                src={G80e}
                alt="G80e side view"
              />
              <h3 className={styles.featured_model_title}>electrified g80</h3>
              <p className={styles.featured_model_description}>Defining the next generation of electrification, Genesis leads with forward facing technologies and intriguing design, embodied in the Electrified G80.</p>
              <Link href={"#"} className={styles.featured_model_link}>discover the electrified g80</Link>
            </div>
          </div>
        </section>

        {/* FEATURED MODEL - G90 */}
        <section id={styles.featured_model}></section>

        {/* VIDEO - GV70 */}
        <section id={styles.featured_video}></section>

        {/* ELECTRIFY EVERY DRIVE */}
        <section id={styles.electrification}></section>

        {/* FACETS OF GENESIS */}
        <section id={styles.facets}></section>

      </main>
      <Footer />
    </>
  );
}
