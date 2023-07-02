import Link from "next/link";

// STYLES
import styles from "@/public/styles/single_model.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA

const SingleProject = ({ params: { slug } }) => {
  // FILTER model based on slug
  // const filteredProject = projects.filter(project => project.slug === slug);

  return (
    <body>
      <Navbar />
      <NavbarMobile />

      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <h1>Testing</h1>
        </section>

        {/* SECTION:  */}
      </main>

      <Footer />
    </body>
  );
};

export default SingleProject;