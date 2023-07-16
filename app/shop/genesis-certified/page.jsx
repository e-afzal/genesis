import Image from "next/image";

// STYLES
import styles from "@/public/styles/shop/certified.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import AccordionDesktop from "@/app/components/shop/certified/AccordionDesktop";
import AccordionMobile from "@/app/components/shop/certified/AccordionMobile";
import WarrantyAccordionMobile from "@/app/components/shop/certified/WarrantyAccordionMobile";
import WarrantyAccordionDesktop from "@/app/components/shop/certified/WarrantyAccordionDesktop";
import Footer from "@/app/components/Footer";

// DATA
import models from "@/app/data/models";

// ASSET IMPORT
import coverage from "@/public/images/shop/certified/coverage_comprehensive.jpg";
import powertrain from "@/public/images/shop/certified/powertrain_coverage.jpg";

const Certified = () => {
  const modelYears = [2023, 2022, 2021, 2020, 2019];
  const eligibilityData = [
    {
      title: "Model Years",
      description:
        "Each Genesis Certified vehicle must meet age, mileage requirements, and have a clean title by CARFAX®.",
      imageUrl: "/images/shop/certified/eligibility_1.jpg",
    },
    {
      title: "Fewer than 60,000 Miles",
      description:
        "Genesis Certified vehicles need to have less than 60,000 miles to qualify for the limited warranty.",
      imageUrl: "/images/shop/certified/eligibility_2.jpg",
    },
    {
      title: "191-Point Inspection",
      description:
        "Technicians meticulously inspect and replace anything with signs of wear, ensuring the vehicle is up to the highest standards.",
      imageUrl: "/images/shop/certified/eligibility_3.jpg",
    },
  ];
  const coveragesData = [
    {
      title: "Years & Miles Based Warranty",
      description:
        "Every Genesis Certified vehicle offers the right amount of peace of mind thanks to a 6-year/75,000-mile Limited Warranty",
      imageUrl: "/images/shop/certified/warranty_coverage_1.jpg",
    },
    {
      title: "Parts covered",
      description:
        "Coverage includes your vehicle’s engine, transmission, transaxle or transfer case, and drive axle(s).",
      imageUrl: "/images/shop/certified/warranty_coverage_2.jpg",
    },
    {
      title: "Roadside Services",
      description:
        "Roadside Services cover dead battery/jump start, flat tire change, lock out service and gas delivery.",
      imageUrl: "/images/shop/certified/warranty_coverage_3.jpg",
    },
  ];

  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_content}>
            <h2>the genesis experience</h2>
            <p>
              For the first time, our lineup of award-winning vehicles is
              available through Genesis Certified. Explore this unique
              opportunity to find your Genesis.
            </p>
          </div>
        </section>

        {/* SECTION: SEARCH INVENTORY - FILTERS */}
        <section id={styles.search}>
          <h3 className={styles.search_title}>
            find a genesis certified vehicle
          </h3>
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
                <label htmlFor="year">year</label>
                <select defaultValue={"all"}>
                  <option value="all" disabled>
                    all
                  </option>
                  {modelYears.map((each, index) => (
                    <option key={index} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="model">model</label>
                <select id="model" defaultValue={"all"}>
                  <option value="all" disabled>
                    all
                  </option>
                  {models.map((model, index) => (
                    <option key={index} value={model.modelName}>
                      Genesis {model.modelName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className={styles.submit_button}>search inventory</button>
          </form>
        </section>

        {/* BENEFITS OF GENESIS CERTIFIED */}
        <h2 className={styles.benefits_main_title}>
          benefits of genesis certified
        </h2>
        {/* COMPREHENSIVE WARRANTY COVERAGE */}
        <section id={styles.warranty}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>
                comprehensive warranty coverage
              </h3>
              <p className={styles.context_body}>
                Genesis Motor America offers a 6-Year/75,000-Mile extended
                Limited Warranty on Genesis Certified vehicles.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={coverage}
                alt="comprehensive warranty coverage"
              />
            </div>
          </div>
        </section>

        {/* POWERTRAIN WARRANTY COVERAGE */}
        <section id={styles.powertrain}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>
                powertrain warranty coverage
              </h3>
              <p className={styles.context_body}>
                Genesis Motor America offers the remainder of the
                10-Year/100,000-Mile Powertrain Limited Warranty* on Genesis
                Certified vehicles.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={powertrain}
                alt="powertrain warranty coverage"
              />
            </div>
          </div>
        </section>

        {/* CERTIFICATION ELIGIBILITY - ACCORDION */}
        <section id={styles.eligibility}>
          <div className={styles.eligibility_accordion_container}>
            <AccordionDesktop styles={styles} data={eligibilityData} />
          </div>
          <div className={styles.eligibility_accordion_container_mobile}>
            <h2 className={styles.eligibility_title_mobile}>
              certification eligibility
            </h2>
            <AccordionMobile styles={styles} data={eligibilityData} />
          </div>
        </section>

        {/* WARRANTY COVERAGES - ACCORDION */}
        <section id={styles.warranty_coverage}>
          <div className={styles.warranty_accordion_container}>
            <WarrantyAccordionDesktop styles={styles} data={coveragesData} />
          </div>
          <div className={styles.warranty_accordion_container_mobile}>
            <h2 className={styles.warranty_title_mobile}>warranty coverages</h2>
            <WarrantyAccordionMobile styles={styles} data={coveragesData} />
          </div>
        </section>

        {/* GET UPDATES - FORM */}
        <section id={styles.updates}>
          <h2 className={styles.update_title}>get updates</h2>

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
            Receive localized news and offers for your area. By clicking or
            tapping the "SEND ME UPDATES" button, I acknowledge that I have read
            and agree to Genesis's Privacy Policy and Terms of Use.
          </p>

          <button className={styles.form_button}>send me updates</button>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Certified;
