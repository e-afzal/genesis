"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// STYLES
import styles from "@/public/styles/navbar.module.scss";

// ASSET IMPORTS
import logo from "@/public/images/logo-white.svg";
import chevron from "@/public/icons/chevron-down-white.svg";

// DATA
import models from "../data/models";

const Navbar = () => {
  //? STATES
  const modelDialogRef = useRef(null);
  const shopDialogRef = useRef(null);
  const brandDialogRef = useRef(null);

  //? DOM ELEMENTS
  const shopMenuItems = [
    { title: "search inventory", imageUrl: "/icons/search-inventory.svg", url: "#" },
    { title: "build your own", imageUrl: "/icons/build-your-own.svg", url: "#" },
    { title: "request a quote", imageUrl: "/icons/request-a-quote.svg", url: "#" },
    { title: "schedule a test drive", imageUrl: "/icons/schedule-a-test-drive.svg", url: "#" },
    { title: "shop parts and accessories", imageUrl: "/icons/shop-parts.svg", url: "#" },
    { title: "genesis certified", imageUrl: "/icons/genesis-certified.svg", url: "#" },
  ];

  const offerMenuItems = [
    { title: "special offers", imageUrl: "/icons/special-offers.svg", url: "#" },
    { title: "estimate trade-in value", imageUrl: "/icons/estimate-trade-in-value.svg", url: "#" },
    { title: "genesis finance", imageUrl: "/icons/genesis-finance.svg", url: "#" }
  ];

  const brandMenuItems = [
    { title: "our story", imageUrl: "/images/brand/our_story.jpg", url: "#" },
    { title: "accolades", imageUrl: "/images/brand/accolades.jpg", url: "#" },
    { title: "events", imageUrl: "/images/brand/events.jpg", url: "#" },
    { title: "genesis house", imageUrl: "/images/brand/genesis_house.jpg", url: "#" },
    { title: "genesis cares", imageUrl: "/images/brand/genesis_cares.jpg", url: "#" },
  ];

  //? HANDLERS
  const toggleModelDialog = () => {
    const modelActive = modelDialogRef.current.classList.contains("active");
    if (modelActive) {
      // If Dialog is OPEN
      modelDialogRef.current.classList.toggle("active");
      modelDialogRef.current.style.display = "none";
    }
    if (!modelActive) {
      // If Dialog is CLOSED
      modelDialogRef.current.classList.toggle("active");
      modelDialogRef.current.style.display = "block";
      // Close all other dialogs
      shopDialogRef.current.style.display = "none";
      brandDialogRef.current.style.display = "none";
      // Remove "active" class, if so
      shopDialogRef.current.classList.remove("active");
      brandDialogRef.current.classList.remove("active");
    }
  };

  const toggleShopDialog = () => {
    const shopActive = shopDialogRef.current.classList.contains("active");
    if (shopActive) {
      // If Modal is OPEN
      shopDialogRef.current.classList.toggle("active");
      shopDialogRef.current.style.display = "none";
    }
    if (!shopActive) {
      // If Dialog is CLOSED
      shopDialogRef.current.classList.toggle("active");
      shopDialogRef.current.style.display = "block";
      // Close all other Dialogs, if open
      modelDialogRef.current.style.display = "none";
      brandDialogRef.current.style.display = "none";
      // Remove "active" class, if so
      modelDialogRef.current.classList.remove("active");
      brandDialogRef.current.classList.remove("active");
    }
  };

  const toggleBrandDialog = () => {
    const brandActive = brandDialogRef.current.classList.contains("active");
    if (brandActive) {
      // If Dialog is OPEN
      brandDialogRef.current.classList.toggle("active");
      brandDialogRef.current.style.display = "none";
    }
    if (!brandActive) {
      // If Dialog is CLOSED
      brandDialogRef.current.classList.toggle("active");
      brandDialogRef.current.style.display = "block";
      // Close all other Dialogs, if open
      modelDialogRef.current.style.display = "none";
      shopDialogRef.current.style.display = "none";
      // Remove "active" class, if so
      modelDialogRef.current.classList.remove("active");
      shopDialogRef.current.classList.remove("active");
    }
  };

  return (
    <header id={styles.header_nav}>
      <nav className={styles.nav_desktop}>
        <Link className={styles.logo_link} href={"/"}>
          <Image
            priority
            className={styles.link_logo}
            src={logo}
            alt="Genesis Brand Logo"
            width={90}
          />
        </Link>

        <div className={styles.nav__flex_box}>
          <div className={styles.nav_left}>
            <button onClick={toggleModelDialog} id="nav_model_btn" className={`${styles.models_btn} ${styles.nav_btn}`}>
              <span>models</span>
              <Image className={styles.nav_btn_chevron} src={chevron} alt="Chevron icon" width={12} />
            </button>
            <button onClick={toggleShopDialog} id="nav_shop_btn" className={`${styles.shop_btn} ${styles.nav_btn}`}>
              <span>shop</span>
              <Image className={styles.nav_btn_chevron} src={chevron} alt="Chevron icon" width={12} />
            </button>
            <button onClick={toggleBrandDialog} id="nav_brand_btn" className={`${styles.genesis_btn} ${styles.nav_btn}`}>
              <span>brand</span>
              <Image className={styles.nav_btn_chevron} src={chevron} alt="Chevron icon" width={12} />
            </button>
          </div>

          <div className={styles.nav_right}>
            <button className={`${styles.owners_btn} ${styles.nav_btn}`}>
              <span>owners</span>
            </button>
            <button className={`${styles.retailer_btn} ${styles.nav_btn}`}>
              <span>find a retailer</span>
            </button>
          </div>
        </div>
      </nav>

      {/* MODELS DIALOG */}
      <div ref={modelDialogRef} className={`${styles.nav_model_dialog}`}>
        <div className={`${styles.nav_dialog_grid} max-w`}>
          {models.map((model, index) => (
            <Link href={"#"} key={index} className={`${styles.nav_dialog_card}`}>
              <Image src={model.image_url}
                className={styles.card_model_image}
                alt={model.modelName}
                width={330}
                height={186}
              />
              <div className={styles.model_content}>
                <span className={styles.car_year}>{model.year}</span>
                <h3 className={styles.car_model_name}>{model.modelName}</h3>
                <p className={styles.car_model_price}>STARTING AT <span>{`$${model.price}`}</span></p>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* SHOP DIALOG */}
      <div ref={shopDialogRef} className={styles.nav_shop_dialog}>
        <div className={`${styles.nav_dialog_grid} max-w`}>
          <div className={styles.shop_tools}>
            <h3 className={styles.shop_title}>shopping tools</h3>
            <ul className={styles.shop_list_grid}>
              {shopMenuItems.map((item, index) => (
                <li key={index} className={styles.shop_list_item}>
                  <Link href={item.url}>
                    <Image
                      className={styles.shop_icon}
                      src={item.imageUrl}
                      width={28}
                      height={28}
                      alt={`${item.title} icon`}
                    />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.shop_offers}>
            <h3 className={styles.offers_title}>offers and financing</h3>
            <ul className={styles.offers_list}>
              {offerMenuItems.map((item, index) => (
                <li key={index} className={styles.offers_list_item}>
                  <Link href={"#"}>
                    <Image
                      className={styles.offer_icon}
                      src={item.imageUrl}
                      width={28}
                      height={28}
                      alt={`${item.title} icon`}
                    />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}


            </ul>
          </div>
        </div>
      </div>

      {/* BRAND DIALOG */}
      <div ref={brandDialogRef} className={styles.nav_brand_dialog}>
        <div className={`${styles.nav_dialog_grid} max-w`}>
          {brandMenuItems.map((item, index) => (
            <Link href={item.url} key={index} className={styles.brand_card}>
              <Image
                className={styles.brand_image}
                src={item.imageUrl}
                alt={item.title}
                width={325}
                height={185}
              />
              <h3 className={styles.brand_card_title}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;