import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/owners/owners.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import AccordionDesktop from "../components/owners/AccordionDesktop";
import AccordionMobile from "../components/owners/AccordionMobile";
import Footer from "../components/Footer";

// ASSET IMPORT
import assistant from "@/public/images/owners/intelligent_assistant/assistant.jpg";
import luxury_mobile from "@/public/images/owners/luxury/luxury_mobile.jpg";

const Owners = () => {
  const experienceData = [
    {
      title: "intelligent assistant",
      description:
        "Sync the Genesis app with your calendar events to receive proactive notifications.",
      imageUrl: "/images/owners/ownership_experience/intelligent_assistant.jpg",
    },
    {
      title: "remote feature",
      description: "Check your engine, climate and door lock status.",
      imageUrl: "/images/owners/ownership_experience/remote_feature.jpg",
    },
    {
      title: "monthly vehicle report",
      description: "Access your vehicle health report and schedule service.",
      imageUrl: "/images/owners/ownership_experience/vehicle_report.jpg",
    },
    {
      title: "points of interest",
      description: "Search POI and send destinations directly to your Genesis.",
      imageUrl: "/images/owners/ownership_experience/points_of_interest.jpg",
    },
  ];
  const ownerResourcesData = [
    {
      title: "myGenesis",
      description:
        "Discover exclusive online resources and information on the MyGenesis Owners homepage.",
      url: "#",
      imageUrl: "/images/owners/owner_resources/owners_website.jpg",
    },
    {
      title: "genesis accessories",
      description:
        "Personalize and Accessorize your Genesis. Browse all accessories: exterior, interior, electronics and cargo.",
      url: "#",
      imageUrl: "/images/owners/owner_resources/accessories.jpg",
    },
    {
      title: "G80 music connectivity",
      description:
        "Enjoy a premium audio experience anywhere your Genesis takes you. ",
      url: "#",
      imageUrl: "/images/owners/owner_resources/g80_connectivity.jpg",
    },
    {
      title: "G90 music connectivity",
      description:
        "Set up your G90 with ease. The ability to connect via a variety of audio sources and devices ensures your music is always at your fingertips.",
      url: "#",
      imageUrl: "/images/owners/owner_resources/g90_connectivity.jpg",
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
            <h2>genesis owner experience portal</h2>
            <p>
              Login to gain special access to exclusive benefits, services and
              vehicle information.
            </p>
            <Link href={"#"}>my genesis login</Link>
          </div>
        </section>

        {/* SECTION: INTELLIGENT ASSISTANT */}
        <section id={styles.assistant}>
          <div className={styles.feature_container_desktop}>
            {/* CONTENT */}
            <div className={styles.feature_content}>
              <h2 className={styles.main_title}>
                3 years of connected service
              </h2>
              <h3 className={styles.subtitle}>genesis intelligent assistant</h3>
              <p className={styles.content_body}>
                Download the Genesis Intelligent Assistant app for convenient
                access to an array of owner benefits and services right from
                your smartphone. The powerful app lets users access remote
                features, and combines connected car services with current data
                to provide helpful notifications as well as a comprehensive look
                at your vehicle’s health, status and more.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.feature_image_box}>
              <Image src={assistant} alt="genesis intelligent assistant" />
            </div>
          </div>
        </section>

        {/* SECTION: OWNERSHIP EXPERIENCE */}
        <section id={styles.experience}>
          <h2 className={styles.experience_main_title}>
            a full-featured ownership experience
          </h2>
          <AccordionDesktop styles={styles} data={experienceData} />
        </section>

        {/* SECTION: OWNERSHIP EXPERIENCE MOBILE */}
        <section id={styles.experience_mobile}>
          <AccordionMobile styles={styles} data={experienceData} />
        </section>

        {/* SECTION: OWNER RESOURCE*/}
        <section id={styles.resource}>
          <h2 className={styles.resource_title}>owner resources</h2>
          <p className={styles.resource_description}>
            visit the genesis owners website for exclusive online resources
          </p>

          <div className={styles.resource_grid}>
            {ownerResourcesData.map((each, index) => (
              <div key={index} className={styles.resource_card}>
                <Image
                  className={styles.resource_image}
                  src={each.imageUrl}
                  width={690}
                  height={560}
                />

                <div className={styles.resource_content}>
                  <h4 className={styles.resource_card_title}>{each.title}</h4>
                  <p className={styles.resource_card_description}>
                    {each.description}
                  </p>
                  <Link href={each.url} className={styles.resource_card_link}>
                    learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: LUXURY */}
        <section id={styles.luxury}>
          <div className={styles.luxury_content}>
            <h2 className={styles.luxury_title}>a breath of luxury</h2>
            <p className={styles.luxury_description}>
              Thoughtfully crafted with rich design elements, innovative
              technology and dramatic performance capability, Genesis is luxury
              evolved. Discover what it means to own a Genesis.
            </p>
          </div>
        </section>

        <section id={styles.luxury_mobile}>
          <Image
            className={styles.luxury_mobile_image}
            src={luxury_mobile}
            alt="Interior of the Genesis G90"
          />
          <div className={styles.luxury_content}>
            <h2 className={styles.luxury_title}>a breath of luxury</h2>
            <p className={styles.luxury_description}>
              Thoughtfully crafted with rich design elements, innovative
              technology and dramatic performance capability, Genesis is luxury
              evolved. Discover what it means to own a Genesis.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Owners;
