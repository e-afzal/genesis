// STYLES
import styles from "@/public/styles/shop/offers.module.scss";

// ASSET IMPORTS

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import offers from "@/app/data/offers";
import Image from "next/image";

const Offers = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_content}>
            <h2>exclusive offers & promotions</h2>
            <p>
              Get exclusive offers on select vehicles for a limited time. Now
              through July 31<sup>st</sup>, 2023.
            </p>
          </div>
        </section>

        {/* SECTION: PROMOTION CARDS */}
        <section id={styles.promotions}>
          <div className={styles.cards_container}>
            {offers.map((offer, index) => (
              <div key={index} className={styles.card_container}>
                <div className={styles.card_image}>
                  <Image
                    src={offer.image}
                    alt={offer.modelName}
                    width={4000}
                    height={2250}
                  />
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_title_box}>
                    <h2 className={styles.card_title}>
                      {offer.modelYear} Genesis {offer.modelName}
                    </h2>
                    <p className={styles.card_price}>
                      starting msrp {offer.msrp}
                    </p>
                  </div>
                  <div className={styles.card_financing_details}>
                    <ul className={styles.financing_details_container}>
                      {offer.financing.conditions.map((each, index) => (
                        <li key={index}>{each}</li>
                      ))}
                    </ul>
                    <p className={styles.offer_expiration}>
                      * Offer is valid from{" "}
                      {offer.financing.validityPeriod.split("-")[0]} to{" "}
                      {offer.financing.validityPeriod.split("-")[1]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Offers;
