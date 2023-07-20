import Link from "next/link";

// STYLES
import styles from "@/public/styles/sitemap.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import models from "../data/models";

const Sitemap = () => {
  const shopLinks = [
    { title: "search inventory", url: "/shop/search-inventory" },
    { title: "request a quote", url: "/shop/request-quote" },
    { title: "schedule a test drive", url: "/shop/schedule-test-drive" },
    { title: "genesis certified", url: "/shop/genesis-certified" },
    { title: "special offers", url: "/shop/special-offers" },
    // { title: "build your own", url: "/" },
    // { title: "shop parts and accessories", url: "/" },
    // { title: "estimate trade-in value", url: "/" },
    // { title: "genesis finance", url: "/" },
  ];
  const caresLinks = [
    { title: "genesis cares", url: "/brand/cares" },
    { title: "genesis owners", url: "/owners" },
  ];
  const discoverLinks = [
    { title: "our story", url: "/brand" },
    { title: "accolades", url: "/brand/accolades" },
    { title: "events", url: "/brand/events" },
    { title: "genesis house", url: "/brand/genesis-house" },
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <h2 className={styles.sitemap_title}>sitemap</h2>

        {/* SECTION: MODELS */}
        <section id={styles.models}>
          <h3 className={styles.models_grid_title}>models</h3>
          <ul className={styles.model_grid}>
            {models.map((model, index) => (
              <li key={index}>
                <Link href={`/models/${model.slug}`}>
                  {model.year} Genesis {model.modelName}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: SHOPPING TOOLS */}
        <section id={styles.shopping}>
          <h3 className={styles.shopping_grid_title}>shopping tools</h3>
          <ul className={styles.shopping_grid}>
            {shopLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: DISCOVER GENESIS */}
        <section id={styles.discover}>
          <h3 className={styles.discover_grid_title}>discover genesis</h3>
          <ul className={styles.discover_grid}>
            {discoverLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: GENESIS CARES */}
        <section id={styles.cares}>
          <h3 className={styles.cares_grid_title}>genesis cares</h3>
          <ul className={styles.cares_grid}>
            {caresLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: FIND A RETAILER */}
        <section id={styles.retailer}>
          <h3 className={styles.retailer_grid_title}>find a retailer</h3>
          <ul className={styles.retailer_grid}>
            <li>
              <Link href={"/retailer"}>find a retailer</Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Sitemap;
