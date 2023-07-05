import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/home.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import HomeCarousel from '@/app/components/homepage/HomeCarousel';
import HomeCarouselMobile from "@/app/components/homepage/HomeCarouselMobile";
import AccordionDesktop from '@/app/components/homepage/AccordionDesktop';
import AccordionMobile from "@/app/components/homepage/AccordionMobile";
import Footer from "@/app/components/Footer";

// ASSET IMPORT
import g90 from "@/public/images/homepage/featured_models/G90.jpg";
import GV80 from "@/public/images/homepage/featured_models/GV80.jpg";
import G80e from "@/public/images/homepage/featured_models/G80e.jpg";
import benefits from "@/public/images/homepage/facets/owner_benefits.jpg";
import runway from "@/public/images/homepage/facets/G90_runway.jpg";
import gt from "@/public/images/homepage/facets/genesis_gt.jpg";

// DATA
import { dataElectrify, dataG90 } from "@/app/data/dataHome";
import HomeCarCarousel from "@/app/components/homepage/HomeCarCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main className={styles.main}>

        {/* SHOWCASE CAROUSEL */}
        <section id={styles.showcase}>
          <HomeCarousel />
          <HomeCarouselMobile />
        </section>

        {/* GENESIS COLLECTION */}
        <section id={styles.featured_models}>
          <h2 className={styles.discover_title}>discover the genesis collection</h2>

          <div className={styles.featured_grid}>

            <div className={styles.featured_card}>
              <Image
                src={g90}
                alt="The all-new 2023 Genesis G90 sedan"
              />
              <h3 className={styles.featured_model_title}>G90</h3>
              <p className={styles.featured_model_description}>
                Proudly named the 2023 MotorTrend Car of the Year, our all-new flagship G90 is the perfect balance of sophisticated design and athletic elegance.</p>
              <Link href={"/models/G90"} className={styles.featured_model_link}>go inside the all-new g90</Link>
            </div>

            <div className={styles.featured_card}>
              <Image
                src={GV80}
                alt="The 2024 Genesis GV80 family-friendly SUV"
              />
              <h3 className={styles.featured_model_title}>GV80</h3>
              <p className={styles.featured_model_description}>Blending the refinement of our luxury sedans with enhanced versatility and cargo capacity, the GV80 adapts to all of life’s adventures.
              </p>
              <Link href={"/models/GV80"} className={styles.featured_model_link}>experience the gv80</Link>
            </div>

            <div className={styles.featured_card}>
              <Image
                src={G80e}
                alt="The 2023 Genesis Electrified G80"
              />
              <h3 className={styles.featured_model_title}>electrified g80</h3>
              <p className={styles.featured_model_description}>Defining the next generation of electrification, Genesis leads with forward facing technologies and intriguing design, embodied in the Electrified G80.</p>
              <Link href={"/models/G80e"} className={styles.featured_model_link}>discover the electrified g80</Link>
            </div>
          </div>
        </section>

        {/* OUR MODELS */}
        <section id={styles.models}>
          <div className={styles.models_grid}>
            <div className={styles.models_header}>
              <h2 className={styles.models_title}>our models</h2>
              <p className={styles.models_description}>Explore Genesis vehicle line-up with its dynamic yet elegant design and cutting-edge technology</p>
            </div>
            <div className={styles.models_cards_container}>
              <HomeCarCarousel styles={styles} />
            </div>
          </div>

        </section>

        {/* AWARDED MODELS */}
        <section id={styles.awards}>
          <AccordionDesktop
            styles={styles}
            title="designed for excellence"
            data={dataG90}
            imageToUse="G90"
          />
        </section>

        {/* AWARDED MODELS - MOBILE */}
        <section id={styles.awards_mobile}>
          <AccordionMobile
            styles={styles}
            title="designed for excellence"
            data={dataG90}
          />
        </section>

        {/* VIDEO - GV70 */}
        <section id={styles.featured_video}>
          <iframe
            src="https://www.youtube.com/embed/Tk5fvajw1RQ"
            title="YouTube video player"
            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowFullScreen></iframe>
        </section>

        {/* ELECTRIFY EVERY DRIVE - DESKTOP */}
        <section id={styles.electrification}>
          <AccordionDesktop
            styles={styles}
            title="electrify every drive"
            data={dataElectrify}
            imageToUse="electrification"
          />
        </section>
        {/* ELECTRIFY EVERY DRIVE - MOBILE */}
        <section id={styles.electrification_mobile}>
          <AccordionMobile
            styles={styles}
            title="electrify every drive"
            data={dataElectrify}
          />
        </section>

        {/* FACETS OF GENESIS */}
        <section id={styles.facets}>
          <h2 className={styles.facets_title}>experience the many facets of genesis</h2>

          <div className={styles.facets_grid}>

            <div className={styles.facets_card}>
              <Image
                src={benefits}
                alt="Close up of the 2023 Genesis Electrified GV70"
              />
              <h3 className={styles.facets_model_title}>luxury that puts you first</h3>
              <p className={styles.facets_model_description}>
                Genesis vehicles are covered by industry-disrupting warranties and exceptional ownership benefits designed to enhance not only the way you drive, but the way you live.</p>
              <Link href={"/"} className={styles.facets_model_link}>explore owner benefits</Link>
            </div>

            <div className={styles.facets_card}>
              <Image
                src={runway}
                alt="Front view of the 2023 Genesis G90 two-line headlamps"
              />
              <h3 className={styles.facets_model_title}>from the highway to the runway</h3>
              <p className={styles.facets_model_description}>A benchmark of refinement, the G90’s style-defining features are catching the eye of fashion’s elite, launching collaborations between Genesis and Vogue, NYFW, Monse, and more.
              </p>
              <Link href={"/models/G90"} className={styles.facets_model_link}>view the g90 design</Link>
            </div>

            <div className={styles.facets_card}>
              <Image
                src={gt}
                alt="The Genesis G70 GR4 concept vehicle on the track"
              />
              <h3 className={styles.facets_model_title}>genesis races into gran turismo</h3>
              <p className={styles.facets_model_description}>Push the G70 GR4 concept to top speeds or practice drifting with unprecedented realism as Genesis takes to the track as an Official Manufacturer Partner of the GT World Series.</p>
              <Link href={"/models/G70"} className={styles.facets_model_link}>go inside the real genesis g70</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
