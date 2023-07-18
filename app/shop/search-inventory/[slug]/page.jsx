import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/shop/single_inventory.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import mixedInventory from "@/app/data/inventory/mixed";

// ASSETS IMPORT
import chevron from "@/public/images/chevron-left.svg";
import AccordionInventory from "@/app/components/shop/inventory/Accordion";

const SingleInventory = ({ params: { slug } }) => {
  // FILTER model based on slug (VIN property in file)
  const filteredModel = mixedInventory.filter((model) => slug === model.VIN);

  return (
    <body>
      <Navbar />
      <NavbarMobile />
      {filteredModel.map((model, index) => (
        <main key={index} id={styles.main}>
          <div className={styles.return_container}>
            <Link
              href={"/shop/search-inventory"}
              className={styles.return_link}
            >
              <Image src={chevron} alt="Chevron icon" />
              <span>back to inventory results</span>
            </Link>
          </div>
          <div className={styles.inventory_main_grid}>
            {/* MODEL DETAILS CONTAINER */}
            <section id={styles.model_details}>
              <div className={styles.model_details_container}>
                <div className={styles.header_flex}>
                  <h2 className={styles.model_name}>
                    {model.ModelYear} Genesis {model.Model}
                  </h2>
                  <h4 className={styles.model_price}>
                    MSRP {model.FormattedPrice}
                  </h4>
                </div>
                <Image
                  width={612}
                  height={344}
                  alt={model.ModelTitle}
                  src={model.images[0]}
                  className={styles.main_image}
                />
                <div className={styles.facts_container}>
                  <div className={`${styles.fact_box} ${styles.msrp_box}`}>
                    <span className={styles.fact_title}>MSRP</span>
                    <span className={styles.fact_data}>
                      {model.FormattedPrice}
                    </span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>VIN#</span>
                    <span className={styles.fact_data}>{model.VIN}</span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>model year</span>
                    <span className={styles.fact_data}>{model.ModelYear}</span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>transmission</span>
                    <span className={styles.fact_data}>{model.Trans}</span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>horsepower</span>
                    <span className={styles.fact_data}>
                      {model.HorsePower} HP
                    </span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>engine</span>
                    <span className={styles.fact_data}>{model.EngineDesc}</span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>drivetrain</span>
                    <span className={styles.fact_data}>{model.Drivetrain}</span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>exterior colour</span>
                    <span className={styles.fact_data}>
                      {model.ExtColorDesc}
                    </span>
                  </div>
                  <div className={styles.fact_box}>
                    <span className={styles.fact_title}>interior colour</span>
                    <span className={styles.fact_data}>
                      {model.IntColor.split("-").join(" ")}
                    </span>
                  </div>
                </div>
                <h2 className={styles.detailed_title}>
                  detailed specifications
                </h2>
                <AccordionInventory
                  interior={model.detailedInteriorFeatures}
                  exterior={model.detailedExteriorFeatures}
                  mechanic={model.detailedMechanicFeatures}
                  safety={model.detailedSafetyFeatures}
                />
              </div>
            </section>

            {/* DEALER DETAILS CONTAINER */}
            <section id={styles.dealer_details}>
              <div className={styles.dealer_details_container}>
                <div className={styles.dealer_title_box}>
                  <h2 className={styles.dealer_main_title}>dealer details</h2>
                </div>

                <div className={styles.dealer_detail_box}>
                  <h4 className={styles.detail_box_title}>name</h4>
                  <p className={styles.dealer_name}>
                    {model.dealerDetails.name}
                  </p>
                </div>

                <div className={styles.dealer_detail_box}>
                  <h4 className={styles.detail_box_title}>location</h4>
                  <p className={styles.dealer_name}>
                    {model.dealerDetails.address}
                  </p>
                </div>

                <div className={styles.dealer_detail_box}>
                  <h4 className={styles.detail_box_title}>phone number</h4>
                  <p className={styles.dealer_name}>
                    {model.dealerDetails.phone}
                  </p>
                </div>

                <div className={styles.dealer_detail_box}>
                  <h4 className={styles.detail_box_title}>website</h4>
                  <p
                    style={{ textTransform: "none" }}
                    className={styles.dealer_name}
                  >
                    {model.dealerDetails.website}
                  </p>
                </div>
              </div>
              {/* DEALER CONTACT FORM */}
              <div className={styles.contact_form}>
                <h2 className={styles.update_title}>contact dealer</h2>

                <form className={styles.update_form}>
                  <div className={styles.name_grid}>
                    <input
                      type="text"
                      className={styles.fName}
                      placeholder="first name*"
                      required
                    />
                    <input
                      type="text"
                      className={styles.lName}
                      placeholder="last name*"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    className={styles.email}
                    placeholder="email*"
                    required
                  />
                  <input
                    type="number"
                    className={styles.zipCode}
                    placeholder="zip code*"
                    required
                  />
                </form>

                <p className={styles.form_condition}>
                  * By submitting the above details, you consent to receiving
                  promotional emails at the provided email by, or on behalf of,
                  Genesis and its authorized retailers. You understand and do
                  not have to consent in order to purchase any products or
                  services.
                </p>

                <button className={styles.form_button}>submit inquiry</button>
              </div>
            </section>
          </div>
        </main>
      ))}
      <Footer />
    </body>
  );
};

export default SingleInventory;
