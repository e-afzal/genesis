import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/shop/inventory.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import mixed from "@/app/data/inventory/mixed";

const Inventory = () => {
  //? Below properties are created for SORT filter to work
  // Below values are numerical since they are based on "ModelYear" property in "mixed.js" file
  const modelYears = ["ALL", 2023, 2022, 2021, 2020, 2019];
  // Below values are based on 'Model' property in "mixed.js" file
  const modelNames = ["G80", "G90", "GV70", "GV80"];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_content}>
            <h2>genesis retailer inventory</h2>
            <p>
              Browse through all of our retailer offerings to find your perfect
              genesis.
            </p>
          </div>
        </section>

        {/* SECTION: SEARCH INVENTORY */}
        <section id={styles.search}>
          <h3 className={styles.search_title}>find your genesis</h3>
          <form>
            <div className={styles.form_grid}>
              <div className={styles.form_control}>
                <label htmlFor="zip">zip code*</label>
                <input
                  id="zip"
                  type="number"
                  placeholder="enter your zip code"
                />
              </div>
              <div className={styles.form_control}>
                <label>year</label>
                <select defaultValue={"all"}>
                  {modelYears.map((each, index) => (
                    <option key={index} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.form_control}>
                <label>model</label>
                <select defaultValue={"all"}>
                  <option value="all">ALL</option>
                  {modelNames.map((modelName, index) => (
                    <option key={index} value={modelName}>
                      Genesis {modelName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className={styles.submit_button}>search inventory</button>
          </form>
        </section>

        {/* SECTION: INVENTORY CARDS */}
        <section id={styles.inventory}>
          <div className={styles.cards_container}>
            {mixed.map((model, index) => (
              <Link href={"#"} key={index} className={styles.card_container}>
                <div className={styles.card_image}>
                  <Image
                    src={model.images[0]}
                    alt={`${model.ModelYear} Genesis ${model.Model}`}
                    width={4000}
                    height={2250}
                  />
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_title_box}>
                    <h2 className={styles.card_title}>
                      {model.ModelYear} Genesis {model.Model}
                    </h2>
                    <p className={styles.card_dealer}>{model.DlrName}</p>
                  </div>
                  <div className={styles.card_features}>
                    <h4 className={styles.feature_title}>highlights</h4>
                    <ul className={styles.card_features_container}>
                      {model.features.map((each, index) => (
                        <li key={index}>{each}</li>
                      ))}
                    </ul>
                    <p className={styles.msrp}>msrp {model.FormattedPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Inventory;
