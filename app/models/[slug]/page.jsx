import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import ModelShowcaseCarousel from "@/app/components/singleModel/ModelShowcase";
import ModelShowcaseCarouselMobile from "@/app/components/singleModel/ModelShowcaseMobile";
import PowertrainCarousel from "@/app/components/singleModel/PowertrainCarousel";
import AccordionDesktop from "@/app/components/singleModel/AccordionDesktop";
import AccordionMobile from "@/app/components/singleModel/AccordionMobile";
import Footer from "@/app/components/Footer";

// DATA
import models from "@/app/data/models";

// ASSET IMPORT
import concierge from "@/public/images/car_models/concierge.jpg";

const SingleProject = ({ params: { slug } }) => {
  // FILTER model based on slug
  const filteredModel = models.filter((model) => slug === model.slug);

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
              modelName={model.modelName}
              caption={model.caption}
            />
            <ModelShowcaseCarouselMobile
              image={model.showcase_carousel_mobile}
              modelName={model.modelName}
              caption={model.caption}
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
                  <p className={styles.bonus_amount}>$500</p>
                </div>
              </div>
              <div className={styles.financing_links}>
                <Link href="#" className={styles.finance_price}>
                  get your price
                </Link>
                <Link href="#" className={styles.finance_offer}>
                  offer details
                </Link>
              </div>
            </div>
            <p className={styles.financing_condition}>
              Finance Offer ends 07/05/2023. Signature Event Bonus offer ends
              07/05/2023.
            </p>
          </section>

          {/* SECTION: BY THE NUMBERS */}
          <section id={styles.numbers}>
            <h2 className={styles.numbers_title}>G70 by the numbers</h2>
            <div className={styles.numbers_grid}>
              <div className={styles.consumption_box}>
                <h3 className={styles.consumption_facts}>
                  21<span>city</span> 31<span>hwy</span>
                </h3>
                <p className={styles.fuel}>fuel consumption</p>
                <p className={styles.estimate}>EPA-estimated city/hwy MPG</p>
              </div>
              <div className={styles.horsepower_box}>
                <h3 className={styles.power_figure}>252</h3>
                <p className={styles.power}>horsepower</p>
              </div>
              <div className={styles.price_box}>
                <h3 className={styles.price_number}>
                  <sup>$</sup>39,400
                </h3>
                <p className={styles.start}>starting msrp</p>
              </div>
            </div>
          </section>

          {/* SECTION: POWERTRAINS */}
          <section id={styles.powertrains}>
            <h2 className={styles.powertrain_title}>available powertrains</h2>

            <div className={styles.powertrains_container}>
              <PowertrainCarousel
                styles={styles}
                powertrains={model.powertrains}
              />
            </div>
          </section>

          {/* SECTION: GALLERY */}
          <section id={styles.gallery}>
            <h2 className={styles.gallery_title}>
              discover the genesis {model.modelName}
            </h2>

            <div className={styles.gallery_grid}>
              {model.gallery.map((each, index) => (
                <div className={`${styles.gallery_item_container}`}>
                  <div
                    key={index}
                    className={styles.gallery_item}
                    style={{
                      backgroundImage: `url(/images/car_models${each})`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: DESIGN */}
          <section id={styles.design}>
            <div className={styles.feature_container_desktop}>
              {/* CONTENT */}
              <div className={styles.feature_content}>
                <h2 className={styles.main_title}>design</h2>
                <h3 className={styles.subtitle}>{model.design.title}</h3>
                <p className={styles.content_body}>
                  {model.design.description}
                </p>
              </div>

              {/* IMAGE BOX */}
              <div className={styles.feature_image_box}>
                <Image
                  width={2880}
                  height={1280}
                  src={`/images/car_models${model.design.image}`}
                  alt={model.design.title}
                />
              </div>
            </div>
          </section>

          {/* SECTION: PERFORMANCE */}
          <section id={styles.performance}>
            <div className={styles.feature_container_desktop}>
              {/* CONTENT */}
              <div className={styles.feature_content}>
                <h2 className={styles.main_title}>performance</h2>
                <h3 className={styles.subtitle}>{model.performance.title}</h3>
                <p className={styles.content_body}>
                  {model.performance.description}
                </p>
              </div>

              {/* IMAGE BOX */}
              <div className={styles.feature_image_box}>
                <Image
                  width={2880}
                  height={1280}
                  src={`/images/car_models${model.performance.image}`}
                  alt={model.performance.title}
                />
              </div>
            </div>
          </section>

          {/* SECTION: SAFETY */}
          <section id={styles.safety}>
            <div className={styles.feature_container_desktop}>
              {/* CONTENT */}
              <div className={styles.feature_content}>
                <h2 className={styles.main_title}>safety</h2>
                <h3 className={styles.subtitle}>{model.safety.title}</h3>
                <p className={styles.content_body}>
                  {model.safety.description}
                </p>
              </div>

              {/* IMAGE BOX */}
              <div className={styles.feature_image_box}>
                <Image
                  width={2880}
                  height={1280}
                  src={`/images/car_models${model.safety.image}`}
                  alt={model.safety.title}
                />
              </div>
            </div>
          </section>

          {/* SECTION: TECHNOLOGY */}
          <section id={styles.technology}>
            <div className={styles.feature_container_desktop}>
              {/* CONTENT */}
              <div className={styles.feature_content}>
                <h2 className={styles.main_title}>technology</h2>
                <h3 className={styles.subtitle}>{model.technology.title}</h3>
                <p className={styles.content_body}>
                  {model.technology.description}
                </p>
              </div>

              {/* IMAGE BOX */}
              <div className={styles.feature_image_box}>
                <Image
                  width={2880}
                  height={1280}
                  src={`/images/car_models${model.technology.image}`}
                  alt={model.technology.title}
                />
              </div>
            </div>
          </section>

          {/* SECTION: GENESIS HOME (Electric) */}
          {model.home?.title && (
            <section id={styles.genesis_home}>
              <div className={styles.feature_container_desktop}>
                {/* CONTENT */}
                <div className={styles.feature_content}>
                  <h3 className={styles.subtitle}>{model.home.title}</h3>
                  <p className={styles.content_body}>
                    {model.home.description}
                  </p>
                </div>

                {/* IMAGE BOX */}
                <div className={styles.feature_image_box}>
                  <Image
                    width={2880}
                    height={1280}
                    src={`/images/car_models${model.home.image}`}
                    alt={model.safety.title}
                  />
                </div>
              </div>
            </section>
          )}

          {/* SECTION: CHARGING (Electric) */}
          {model.charging?.title && (
            <section id={styles.charging}>
              <div className={styles.feature_container_desktop}>
                {/* CONTENT */}
                <div className={styles.feature_content}>
                  <h2 className={styles.main_title}>charging</h2>
                  <h3 className={styles.subtitle}>{model.charging.title}</h3>
                  <p className={styles.content_body}>
                    {model.charging.description}
                  </p>
                </div>

                {/* IMAGE BOX */}
                <div className={styles.feature_image_box}>
                  <Image
                    width={2880}
                    height={1280}
                    src={`/images/car_models${model.charging.image}`}
                    alt={model.charging.title}
                  />
                </div>
              </div>
            </section>
          )}

          {/* SECTION: ACCESSORIES */}
          {model.accessories.length >= 1 && (
            <section id={styles.accessories}>
              <h2 className={styles.accessories_main_title}>accessories</h2>
              <AccordionDesktop
                modelName={model.modelName}
                styles={styles}
                data={model.accessories}
              />
            </section>
          )}

          {/* SECTION: ACCESSORIES-MOBILE */}
          {model.accessories.length >= 1 && (
            <section id={styles.accessories_mobile}>
              <AccordionMobile
                modelName={model.modelName}
                styles={styles}
                data={model.accessories}
              />
            </section>
          )}

          {/* SECTION: OWNER */}
          <section id={styles.owner}></section>

          {/* SECTION: UPDATES */}
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
              tapping the "SEND ME UPDATES" button, I acknowledge that I have
              read and agree to Genesis's Privacy Policy and Terms of Use.
            </p>

            <button className={styles.form_button}>send me updates</button>
          </section>

          {/* SECTION: CONCIERGE */}
          <section id={styles.concierge}>
            <div className={styles.concierge_container}>
              {/* CONTENT */}
              <div className={styles.concierge_content}>
                <h3 className={styles.concierge_title}>genesis concierge</h3>
                <p className={styles.concierge_body}>
                  Perhaps the most elevated way to shop for a vehicle, Genesis
                  Concierge offers a full catalogue of complimentary personal
                  shopping services right from the comfort of home. Schedule
                  on-location test drives, request inventory searches and more.
                  Connect with a Genesis Concierge today to make finding your
                  perfect Genesis straightforward and enjoyable.
                </p>
                <Link href={"#"}>discover concierge services</Link>
              </div>

              {/* IMAGE BOX */}
              <div className={styles.concierge_image_box}>
                <Image
                  width={1440}
                  height={640}
                  src={concierge}
                  alt="concierge services"
                />
              </div>
            </div>
          </section>

          {/* SECTION: SHOP */}
          <section id={styles.shop}></section>
        </main>
      ))}
      <Footer />
    </body>
  );
};

export default SingleProject;
