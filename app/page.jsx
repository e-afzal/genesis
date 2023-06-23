// STYLES
import styles from "@/public/styles/home.module.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main className={styles.main}>
      </main>
      <Footer />
    </>
  );
}
