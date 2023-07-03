import Link from "next/link";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import models from "@/app/data/models";

const SingleProject = ({ params: { slug } }) => {
  // FILTER model based on slug
  const filteredModel = models.filter(model => model.slug === slug);

  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>

        {/* SHOWCASE CAROUSEL */}
        <section id={styles.showcase}></section>

        {/* FINANCING */}
        <section id={styles.financing}></section>

        {/* BY THE NUMBERS */}
        <section id={styles.numbers}></section>

        {/* ABOUT */}
        <section id={styles.about}></section>

        {/* POWERTRAINS */}
        <section id={styles.powertrains}></section>

        {/* GALLERY */}
        <section id={styles.gallery}></section>

        {/* DESIGN */}
        <section id={styles.design}></section>

        {/* PERFORMANCE */}
        <section id={styles.performance}></section>

        {/* ACCESSORIES */}
        <section id={styles.accessories}></section>

        {/* OWNER */}
        <section id={styles.owner}></section>

        {/* UPDATES */}
        <section id={styles.updates}></section>

        {/* CONCIERGE */}
        <section id={styles.concierge}></section>

        {/* SHOP */}
        <section id={styles.shop}></section>
      </main>

      <Footer />
    </body>
  );
};

export default SingleProject;