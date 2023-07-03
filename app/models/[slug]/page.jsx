import Link from "next/link";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import ModelShowcaseCarousel from '@/app/components/singleModel/ModelShowcase';
import Footer from "@/app/components/Footer";

// DATA
import models from "@/app/data/models";
import ModelShowcaseCarouselMobile from "@/app/components/singleModel/ModelShowcaseMobile";

const SingleProject = ({ params: { slug } }) => {
  // FILTER model based on slug
  const filteredModel = models.filter(model => slug === model.slug);

  return (
    <body>
      <Navbar />
      <NavbarMobile />
      {filteredModel.map((model, index) => (
        <main key={index} id={styles.main}>

          {/* SHOWCASE CAROUSEL */}
          <section id={styles.showcase}>
            <ModelShowcaseCarousel
              images={model.showcase_carousel}
            />
            <ModelShowcaseCarouselMobile
              image={model.showcase_carousel_mobile}
            />
          </section>

          {/* SECTION: FINANCING */}
          <section id={styles.financing}>
            <div className={styles.financing_grid}>
              <div className={styles.financing_numbers}>

                <div className={styles.item_apr}>
                  <h6 className={styles.apr_title}>finance</h6>
                  <p className={styles.apr_amount}>3.49%</p>
                </div>

                <div className={styles.item_mos}>
                  <h6 className={styles.mos_title}>mos.</h6>
                  <p className={styles.mos_amount}>60</p>
                </div>
                <div className={styles.item_bonus}>
                  <h6 className={styles.bonus_title}>signature event bonus</h6>
                  <p className={styles.bonus_amount}>
                    $500
                  </p>
                </div>
              </div>
              <div className={styles.financing_links}>
                <Link href="#" className={styles.finance_price}>get your price</Link>
                <Link href="#" className={styles.finance_offer}>offer details</Link>
              </div>
            </div>
            <p className={styles.financing_condition}>
              Finance Offer ends 07/05/2023. Signature Event Bonus offer ends 07/05/2023.
            </p>
          </section>

          {/* SECTION: BY THE NUMBERS */}
          <section id={styles.numbers}>
            <h2 className={styles.numbers_title}>G70 by the numbers</h2>
            <div className={styles.numbers_grid}>

              <div className={styles.consumption_box}>
                <h3 className={styles.consumption_facts}>21<span>city</span> 31<span>hwy</span></h3>
                <p className={styles.fuel}>fuel consumption</p>
                <p className={styles.estimate}>EPA-estimated city/hwy MPG</p>
              </div>
              <div className={styles.horsepower_box}>
                <h3 className={styles.power_figure}>252</h3>
                <p className={styles.power}>horsepower</p>
              </div>
              <div className={styles.price_box}>
                <h3 className={styles.price_number}><sup>$</sup>39,400</h3>
                <p className={styles.start}>starting msrp</p>
              </div>
            </div>

          </section>

          {/* SECTION: POWERTRAINS */}
          <section id={styles.powertrains}></section>

          {/* SECTION: GALLERY */}
          <section id={styles.gallery}></section>

          {/* SECTION: DESIGN */}
          <section id={styles.design}></section>

          {/* SECTION: PERFORMANCE */}
          <section id={styles.performance}></section>

          {/* SECTION: SAFETY */}
          <section id={styles.safety}></section>

          {/* SECTION: TECHNOLOGY */}
          <section id={styles.technology}></section>

          {/* SECTION: ACCESSORIES */}
          <section id={styles.accessories}></section>

          {/* SECTION: OWNER */}
          <section id={styles.owner}></section>

          {/* SECTION: UPDATES */}
          <section id={styles.updates}></section>

          {/* SECTION: CONCIERGE */}
          <section id={styles.concierge}></section>

          {/* SECTION: SHOP */}
          <section id={styles.shop}></section>
        </main>
      ))}
      <Footer />
    </body>
  );
};

export default SingleProject;