import Image from "next/image";

// STYLES
import styles from "@/public/styles/brand/house.module.scss";

//COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// ASSET IMPORTS
import showroom from "@/public/images/brand/genesis_house/showroom.jpg";
import pavilion from "@/public/images/brand/genesis_house/pavilion.jpg";
import library from "@/public/images/brand/genesis_house/library.jpg";
import restaurant from "@/public/images/brand/genesis_house/restaurant.jpg";
import terrace from "@/public/images/brand/genesis_house/terrace.jpg";
import stage from "@/public/images/brand/genesis_house/cellar.jpg";
import information from "@/public/images/brand/genesis_house/information.jpg";

const House = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_content}>
            <h2>
              genesis house <br /> new york
            </h2>
          </div>
        </section>

        {/* SECTION: SHOWROOM */}
        <section id={styles.showroom}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>genesis showroom</h3>
              <p className={styles.context_body}>
                The main floor offers guests an opportunity to experience the
                latest Genesis vehicles in a relaxed environment. Suh Architects
                framed Genesis vehicles as finely crafted objects of desire,
                using reflections from a tessellated mirror display to amplify
                their seductive engineering. These glass cases of telescoping
                linear light are hung on surfaces of exposed concrete, creating
                a unique art installation.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={showroom}
                alt="Genesis Showroom in New York"
              />
            </div>
          </div>
        </section>

        {/* SECTION: PAVILION */}
        <section id={styles.pavilion}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>tea pavilion</h3>
              <p className={styles.context_body}>
                Inspired by the tastes of connoisseurs, the Tea Pavilion is a
                veranda-like living room space featuring customized boryo floor
                seating where guests are traditionally received by their host.
                The pavilion borrows motifs from the chaekgado painting style to
                visualize the philosophy of virtuous scholars known as seonbi.
                Led by a trained tea specialist, the Genesis House Tea Ceremony
                will serve as a symbolic experience of hospitality as Genesis
                House welcomes its guests to refresh and recharge.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={pavilion}
                alt="Genesis Showroom in New York"
              />
            </div>
          </div>
        </section>

        {/* SECTION: LIBRARY */}
        <section id={styles.library}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>genesis house library</h3>
              <p className={styles.context_body}>
                Curated by LVMH publisher Assouline, the Genesis House Library
                is filled with special edition books, luxury display items, and
                unique accessories. Together, Assouline and Arumjigi have
                sourced distinctly Korean books and collections from around the
                world that discuss art, design, food, and travel. The Genesis
                House Publication series will introduce original publications
                from Genesis House that highlight elements of Korean culture.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={library}
                alt="Genesis House Library"
              />
            </div>
          </div>
        </section>

        {/* SECTION: RESTAURANT */}
        <section id={styles.restaurant}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>genesis house restaurant</h3>
              <p className={styles.context_body}>
                Genesis House Restaurant marks the first international expansion
                for Onjium, a Michelin-starred restaurant and cultural institute
                from Seoul that is dedicated to creating a new and lasting
                heritage that takes inspiration from Korean traditional
                clothing, food, and housing.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={restaurant}
                alt="Genesis House Restaurant"
              />
            </div>
          </div>
        </section>

        {/* SECTION: STAGE */}
        <section id={styles.stage}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>cellar stage</h3>
              <p className={styles.context_body}>
                The Cellar Stage is located below the ground floor in a
                voluminous event space that runs the length of the building.
                Outfitted with floor-to-ceiling LED-lit staging and state-of-the
                art audio-visual technology, it is a space that is dedicated not
                only to launching new vehicles, but also to conducting thought
                leadership summits and hosting engaging events.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image width={1440} height={640} src={stage} alt="Cellar Stage" />
            </div>
          </div>
        </section>

        {/* SECTION: GARDEN */}
        <section id={styles.garden}>
          <div className={styles.context_container}>
            {/* CONTENT */}
            <div className={styles.context_content}>
              <h3 className={styles.context_title}>terrace garden</h3>
              <p className={styles.context_body}>
                The outdoor terrace and garden offer guests an unobstructed view
                of the High Line. It is surrounded by a traditional Korean
                landscape of white sand and gravel and adorned with greenery,
                extending Genesis’ views to the Hudson River and the High Line,
                the artery of Lower Manhattan.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.context_image_box}>
              <Image
                width={1440}
                height={640}
                src={terrace}
                alt="Terrace Garden"
              />
            </div>
          </div>
        </section>

        {/* SECTION: INFORMATION */}
        <section id={styles.information}>
          <h2 className={styles.information_title}>
            genesis house general information
          </h2>
          <Image src={information} alt="Genesis Showroom in New York" />

          <div className={styles.information_grid}>
            <div className={styles.information_box}>
              <h4 className={styles.information_title}>operating hours</h4>
              <div className={styles.range_box}>
                <p className={styles.operating_days}>Tuesday – Thursday</p>
                <p className={styles.operating_time}>11 AM – 10 PM</p>
              </div>
              <div className={styles.range_box_one}>
                <p className={styles.operating_days}>Friday – Sunday</p>
                <p className={styles.operating_time}>11 AM – 11 PM</p>
              </div>
              <p className={styles.closed_day}>Closed on Monday</p>
            </div>
            <div className={styles.information_box}>
              <h4 className={styles.information_title}>address</h4>
              <p className={styles.information_description}>
                40A 10th Ave, New York, NY 10014
              </p>
            </div>
            <div className={styles.information_box}>
              <h4 className={styles.information_title}>contact</h4>
              <p className={styles.information_description}>
                Call us on +1-855-444-0836 or email us at
                info@genesishouseNYC.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default House;
