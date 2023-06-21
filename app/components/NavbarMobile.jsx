import Image from "next/image";

// STYLES
import styles from "@/public/styles/navbar_mobile.module.scss";

// ASSET IMPORT
import logo from "@/public/images/logo-white.svg";
import menu from "@/public/icons/menu.svg";

const NavbarMobile = () => {
  return (
    <header id={styles.header_mobile}>
      <nav className={styles.nav_mobile}>
        <Image
          src={logo}
          alt="Genesis Brand Logo"
          className={styles.nav_mobile_logo}
          width={84}
        />
        <Image
          src={menu}
          alt="Navbar Hamburger Icon"
          className={styles.nav_mobile_menu_icon}
        />

      </nav>
    </header>
  );
};

export default NavbarMobile;