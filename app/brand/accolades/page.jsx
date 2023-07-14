import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/brand/accolades.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import AccordionDesktop from "@/app/components/brand/accolades/AccordionDesktop";
import Footer from "@/app/components/Footer";

// ASSET IMPORTS
import g80Mobile from "@/public/images/brand/accolades/g80_hero_mobile.jpg";
import g90Mobile from "@/public/images/brand/accolades/g90_hero_mobile.jpg";
import gv70Mobile from "@/public/images/brand/accolades/gv70_hero_mobile.jpg";
import gv80Mobile from "@/public/images/brand/accolades/gv80_hero_mobile.jpg";
import AccordionMobile from "@/app/components/brand/accolades/AccordionMobile";

const Accolades = () => {
  const g80AccordionData = [
    {
      title: "Autotrader: 10 Best Car Interiors under $50,000",
      description:
        "Assessing a range of intelligently designed, spacious interiors, the 2021 Genesis G80 was named a 10 Best Car Interiors Under $50,000 by Autotrader. G80’s well-crafted cabin proves itself the pinnacle of value without compromising premium comfort or state-of-the-art technologies.",
      imageUrl: "/images/brand/accolades/g80_award_autotrader.jpg",
    },
    {
      title: "2020 NHTSA 5-Star Overall Safety Rating",
      description:
        "For more than 30 years, the National Highway Traffic Safety Administration has set the standard for automotive safety, making it easier for drivers to choose safer vehicles. Genesis shares this commitment to safety first and that has resulted in the NHTSA bestowing its highest rating on the 2020 G80.",
      imageUrl: "/images/brand/accolades/g80_award_nhtsa.jpg",
    },
  ];

  const g90AccordionData = [
    {
      title: "2023 IIHS Top Safety Pick+",
      description:
        "Delivering exceptional luxury through peace of mind, the 2023 G90 earned a coveted IIHS TOP SAFETY PICK+ rating. At the forefront of vehicle safety testing for more than 25 years, IIHS evaluates vehicles on how well they protect occupants in the event of a crash and the technology they employ to prevent a collision or lessen its severity.",
      imageUrl: "/images/brand/accolades/g90_award_iihs.jpg",
    },
    {
      title: "CARS.COM: Best Luxury Car of 2023",
      description:
        "After evaluating the automotive world’s finest sedans, the editors of Cars.com named the Genesis G90 the Best Luxury Car of 2023. According to them, its standout features included the “sensuous and stately” exterior styling, “regally finished cabin” and “world-class quietness and comfort.”",
      imageUrl: "/images/brand/accolades/g90_award_cars.com.jpg",
    },
    {
      title: "2023 Motortrend Car of the Year",
      description:
        "The all-new flagship G90 has been named the 2023 MotorTrend Car of the Year®. With six key categories of safety, efficiency, value, advancement in design, engineering excellence and performance of intended function, the sophisticated design and athletic elegance of the G90 outclassed the competition.",
      imageUrl: "/images/brand/accolades/g90_award_mototrend.jpg",
    },
  ];

  const gv70AccordionData = [
    {
      title: "2023 Car & Driver 10BEST",
      description:
        "Noting its superior refinement, performance and value, the Genesis GV70 has been named a 2023 Car and Driver 10Best. The GV70 is particularly proud to have received this accolade in such a fiercely competitive segment.",
      imageUrl: "/images/brand/accolades/gv70_award_car&driver.jpg",
    },
    {
      title: "Kelley Blue Book: 2023 Best Buy Awards",
      description:
        "Kelley Blue Book has named the Genesis GV70 the Best Buy of the Year among Compact SUVs for the second consecutive year. The judges noted that the GV70’s striking design, luxurious amenities and overall value all rose above the competition.",
      imageUrl: "/images/brand/accolades/gv70_award_kelley.jpg",
    },
    {
      title: "Edmunds: Top Rated Luxury SUV Award",
      description:
        "With a choice of powerful engines, standard AWD, an exceptional interior and ample cargo space, one SUV stands alone at the top. We’re proud to announce the Genesis GV70 was named the Top Rated Luxury SUV of 2022 by Edmunds.",
      imageUrl: "/images/brand/accolades/gv70_award_edmunds.jpg",
    },
    {
      title: "AutoTrader: Best New Car of 2022",
      description:
        "With a mission of finding the best cars for 2022, Autotrader combed through the competition with one luxury SUV coming out on top. The 2022 Genesis GV70. With its stunning design, advanced technology and exceptional drive, the Genesis GV70 was named a Best New Car of 2022 from Autotrader.",
      imageUrl: "/images/brand/accolades/gv70_award_autotrader.jpg",
    },
  ];

  const gv80AccordionData = [
    {
      title: "Kelley Blue Book: 2023 Best Buy Awards",
      description:
        "For the third consecutive year, the Genesis GV80 is a Kelley Blue Book's KBB.com Best Buy Award Winner. In making their decision, the editors cited its “roomy, luxurious interior, engaging drive quality, excellent safety ratings, and a class-leading warranty,” adding that “it’s already established itself as a leader in this competitive class.”",
      imageUrl: "/images/brand/accolades/gv80_award_kelley.jpg",
    },
    {
      title: "AutoTrader: Among the Best New Cars of 2021",
      description:
        "Proving to be one of the most desirable luxury SUVs in its class, the 2021 Genesis GV80 is one of the Best New Cars of 2021, according to Autotrader. Taking time to focus in on their highest-ranking steel, Autotrader looked at 300 all-new and updated 2021 vehicles before selecting just 12 for quality, comfort, style, strong value and more.",
      imageUrl: "/images/brand/accolades/gv80_award_autotrader.jpg",
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
            <h2>awards & accolades</h2>
            <p>
              A testament to our passion for reliability and quality, Genesis
              stands at the highest level, continuously winning some of the
              industry’s most prestigious awards.
            </p>
          </div>
        </section>
        {/* SECTION: G80 AWARDS */}
        <section id={styles.g80}>
          <h2 className={styles.award_title}>g80 awards & accolades</h2>
          {/* HERO SECTIONS: DESKTOP &  MOBILE */}
          <div className={styles.g80_hero}>
            <div className={styles.hero_content}>
              <h3>genesis g80</h3>
              <p>
                Defined by athletic styling, exhilarating performance, spacious
                interior, plus our most advanced technology and safety features,
                the G80 has been lauded as everything a midsize luxury sedan
                should be.
              </p>
              <Link href={"/models/G80"}>explore the g80</Link>
            </div>
          </div>
          <div className={styles.g80_hero_mobile}>
            <div className={styles.hero_image}>
              <Image
                src={g80Mobile}
                alt="G80 Hero image"
                width={750}
                height={660}
              />
            </div>
            <div className={styles.hero_content}>
              <h3>genesis g80</h3>
              <p>
                Defined by athletic styling, exhilarating performance, spacious
                interior, plus our most advanced technology and safety features,
                the G80 has been lauded as everything a midsize luxury sedan
                should be.
              </p>
              <Link href={"/models/G80"}>explore the g80</Link>
            </div>
          </div>
          {/* ACCORDION FOR 2 AWARDS */}
          <div className={styles.award_accordion_container}>
            <AccordionDesktop styles={styles} data={g80AccordionData} />
          </div>
          <div className={styles.award_accordion_container_mobile}>
            <AccordionMobile styles={styles} data={g80AccordionData} />
          </div>
        </section>

        {/* SECTION: G90 AWARDS */}
        <section id={styles.g90}>
          <h2 className={styles.award_title}>g90 awards & accolades</h2>
          <div className={styles.g90_hero}>
            <div className={styles.hero_content}>
              <h3>genesis g90</h3>
              <p>
                Our all-new flagship G90 is the utmost expression of refined
                luxury. Its immediate and immense recognition, including being
                named MotorTrend’s 2023 Car of the Year®, clearly punctuates
                G90’s position at the top of its class.
              </p>
              <Link href={"/models/G90"}>explore the g90</Link>
            </div>
          </div>
          <div className={styles.g90_hero_mobile}>
            <div className={styles.hero_image}>
              <Image
                src={g90Mobile}
                alt="G90 Hero image"
                width={1500}
                height={1350}
              />
            </div>
            <div className={styles.hero_content}>
              <h3>genesis g90</h3>
              <p>
                Our all-new flagship G90 is the utmost expression of refined
                luxury. Its immediate and immense recognition, including being
                named MotorTrend’s 2023 Car of the Year®, clearly punctuates
                G90’s position at the top of its class.
              </p>
              <Link href={"/models/G90"}>explore the g90</Link>
            </div>
          </div>
          {/* ACCORDION FOR 2 AWARDS */}
          <div className={styles.award_accordion_container}>
            <AccordionDesktop styles={styles} data={g90AccordionData} />
          </div>
          <div className={styles.award_accordion_container_mobile}>
            <AccordionMobile styles={styles} data={g90AccordionData} />
          </div>
        </section>

        {/* SECTION: GV70 AWARDS */}
        <section id={styles.gv70}>
          <h2 className={styles.award_title}>gv70 awards & accolades</h2>
          <div className={styles.gv70_hero}>
            <div className={styles.hero_content}>
              <h3>genesis gv70</h3>
              <p>
                The impeccably designed GV70 boasts confidence and versatility
                around every turn. With first-of-its-kind technology,
                world-class safety, and all-road capability, this performance
                SUV doesn’t shy away from the spotlight. It demands it.
              </p>
              <Link href={"/models/GV70"}>explore the gv70</Link>
            </div>
          </div>
          <div className={styles.gv70_hero_mobile}>
            <div className={styles.hero_image}>
              <Image
                src={gv70Mobile}
                alt="GV70 Hero image"
                width={750}
                height={760}
              />
            </div>
            <div className={styles.hero_content}>
              <h3>genesis gv70</h3>
              <p>
                The impeccably designed GV70 boasts confidence and versatility
                around every turn. With first-of-its-kind technology,
                world-class safety, and all-road capability, this performance
                SUV doesn’t shy away from the spotlight. It demands it.
              </p>
              <Link href={"/models/GV70"}>explore the gv70</Link>
            </div>
          </div>{" "}
          {/* ACCORDION FOR 2 AWARDS */}
          <div className={styles.award_accordion_container}>
            <AccordionDesktop styles={styles} data={gv70AccordionData} />
          </div>
          <div className={styles.award_accordion_container_mobile}>
            <AccordionMobile styles={styles} data={gv70AccordionData} />
          </div>
        </section>

        {/* SECTION: GV80 AWARDS */}
        <section id={styles.gv80}>
          <h2 className={styles.award_title}>gv80 awards & accolades</h2>
          <div className={styles.gv80_hero}>
            <div className={styles.hero_content}>
              <h3>genesis gv80</h3>
              <p>
                Featuring a magnetic display of design, capability, technology
                and more, GV80 has taken its rightful place in the top echelon
                of midsize luxury SUVs, winning high praise from demanding
                critics and experts alike—its very first year on the market.
              </p>
              <Link href={"/models/GV80"}>explore the gv80</Link>
            </div>
          </div>
          <div className={styles.gv80_hero_mobile}>
            <div className={styles.hero_image}>
              <Image
                src={gv80Mobile}
                alt="GV80 Hero image"
                width={750}
                height={674}
              />
            </div>
            <div className={styles.hero_content}>
              <h3>genesis gv80</h3>
              <p>
                Featuring a magnetic display of design, capability, technology
                and more, GV80 has taken its rightful place in the top echelon
                of midsize luxury SUVs, winning high praise from demanding
                critics and experts alike—its very first year on the market.
              </p>
              <Link href={"/models/GV80"}>explore the gv80</Link>
            </div>
          </div>{" "}
          {/* ACCORDION FOR 2 AWARDS */}
          <div className={styles.award_accordion_container}>
            <AccordionDesktop styles={styles} data={gv80AccordionData} />
          </div>
          <div className={styles.award_accordion_container_mobile}>
            <AccordionMobile styles={styles} data={gv80AccordionData} />
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Accolades;
