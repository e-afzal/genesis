"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/navbar_mobile.module.scss";

// ASSET IMPORT
import logo from "@/public/images/logo-white.svg";
import menu from "@/public/icons/menu.svg";
import chevron from "@/public/icons/chevron-down-white.svg";

// DATA
import models from "../data/models";

const NavbarMobile = () => {
  //? DOM ELEMENTS
  const shopMenuItems = [
    {
      title: "search inventory",
      imageUrl: "/icons/search-inventory.svg",
      url: "/",
    },
    {
      title: "build your own",
      imageUrl: "/icons/build-your-own.svg",
      url: "/",
    },
    {
      title: "request a quote",
      imageUrl: "/icons/request-a-quote.svg",
      url: "/",
    },
    {
      title: "schedule a test drive",
      imageUrl: "/icons/schedule-a-test-drive.svg",
      url: "/",
    },
    {
      title: "shop parts and accessories",
      imageUrl: "/icons/shop-parts.svg",
      url: "/",
    },
    {
      title: "genesis certified",
      imageUrl: "/icons/genesis-certified.svg",
      url: "/",
    },
  ];

  const offerMenuItems = [
    {
      title: "special offers",
      imageUrl: "/icons/special-offers.svg",
      url: "/",
    },
    {
      title: "estimate trade-in value",
      imageUrl: "/icons/estimate-trade-in-value.svg",
      url: "/",
    },
    {
      title: "genesis finance",
      imageUrl: "/icons/genesis-finance.svg",
      url: "/",
    },
  ];

  const brandMenuItems = [
    {
      title: "our story",
      imageUrl: "/images/brand/our_story.jpg",
      url: "/brand",
    },
    { title: "accolades", imageUrl: "/images/brand/accolades.jpg", url: "/" },
    {
      title: "events",
      imageUrl: "/images/brand/events.jpg",
      url: "/brand/events",
    },
    {
      title: "genesis house",
      imageUrl: "/images/brand/genesis_house.jpg",
      url: "/",
    },
    {
      title: "genesis cares",
      imageUrl: "/images/brand/genesis_cares.jpg",
      url: "/",
    },
  ];

  //? STATE
  const [menuOpen, setMenuOpen] = useState(false);
  const [modelsOverlayOpen, setModelsOverlayOpen] = useState(false);
  const [shopOverlayOpen, setShopOverlayOpen] = useState(false);
  const [brandOverlayOpen, setBrandOverlayOpen] = useState(false);

  //? HANDLERS
  const handleMenu = () => {
    if (!menuOpen) setMenuOpen(true);
    if (menuOpen) {
      setMenuOpen(false);
      setModelsOverlayOpen(false);
      setShopOverlayOpen(false);
      setBrandOverlayOpen(false);
    }
  };

  const handleModelsOverlay = () =>
    !modelsOverlayOpen
      ? setModelsOverlayOpen(true)
      : setModelsOverlayOpen(false);
  const handleShopOverlay = () =>
    !shopOverlayOpen ? setShopOverlayOpen(true) : setShopOverlayOpen(false);
  const handleBrandOverlay = () =>
    !brandOverlayOpen ? setBrandOverlayOpen(true) : setBrandOverlayOpen(false);

  return (
    <header id={styles.header_mobile}>
      <nav className={styles.nav_mobile}>
        <Link href={"/"} className={styles.logo_link}>
          <Image
            src={logo}
            alt="Genesis Brand Logo"
            className={styles.nav_mobile_logo}
            width={84}
          />
        </Link>

        <Image
          onClick={handleMenu}
          src={menu}
          alt="Navbar Hamburger Icon"
          className={styles.nav_mobile_menu_icon}
        />
      </nav>

      {/* MAIN OVERLAY */}
      <div
        style={{ display: !menuOpen ? "none" : "block" }}
        className={styles.nav_mobile_main_overlay}
      >
        <ul className={styles.main_link_list}>
          <li
            onClick={handleModelsOverlay}
            className={styles.main_link_list_item}
          >
            <button className={styles.list_item_btn}>models</button>
            <Image
              src={chevron}
              alt="Chevron icon"
              className={styles.chevron_icon}
              width={13}
            />
          </li>
          <li
            onClick={handleShopOverlay}
            className={styles.main_link_list_item}
          >
            <button className={styles.list_item_btn}>shop</button>
            <Image
              src={chevron}
              alt="Chevron icon"
              className={styles.chevron_icon}
              width={13}
            />
          </li>
          <li
            onClick={handleBrandOverlay}
            className={styles.main_link_list_item}
          >
            <button className={styles.list_item_btn}>brand</button>
            <Image
              src={chevron}
              alt="Chevron icon"
              className={styles.chevron_icon}
              width={13}
            />
          </li>
          <li className={styles.main_link_list_item}>
            <Link href="#" className={styles.list_item_link}>
              owners
            </Link>
          </li>
          <li className={styles.main_link_list_item}>
            <Link href="#" className={styles.list_item_link}>
              find a retailer
            </Link>
          </li>

          {/* MODELS OVERLAY */}
          <div
            style={{ display: !modelsOverlayOpen ? "none" : "block" }}
            className={styles.nav_models_overlay}
          >
            <button
              onClick={handleModelsOverlay}
              className={styles.main_return_btn}
            >
              <Image
                src={chevron}
                alt="Chevron Icon"
                className={styles.chevron_icon}
                width={11}
              />
              <span>models</span>
            </button>
            <div className={styles.models_container}>
              {models.map((model, index) => (
                <Link
                  href={`/models/${model.slug}`}
                  key={index}
                  className={`${styles.model_card}`}
                >
                  <Image
                    src={model.image_url}
                    className={styles.model_card_image}
                    alt={model.modelName}
                    width={330}
                    height={186}
                  />
                  <div className={styles.model_content}>
                    <span className={styles.car_year}>{model.year}</span>
                    <h3 className={styles.car_model_name}>{model.modelName}</h3>
                    <p className={styles.car_model_price}>
                      STARTING AT <span>{`$${model.price}`}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SHOP OVERLAY */}
          <div
            style={{ display: !shopOverlayOpen ? "none" : "block" }}
            className={styles.nav_shop_overlay}
          >
            <button
              onClick={handleShopOverlay}
              className={styles.main_return_btn}
            >
              <Image
                src={chevron}
                alt="Chevron Icon"
                className={styles.chevron_icon}
                width={11}
              />
              <span>shop</span>
            </button>
            <div className={styles.nav_dialog_grid}>
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

          {/* BRAND OVERLAY */}
          <div
            style={{ display: !brandOverlayOpen ? "none" : "block" }}
            className={styles.nav_brand_overlay}
          >
            <button
              onClick={handleBrandOverlay}
              className={styles.main_return_btn}
            >
              <Image
                src={chevron}
                alt="Chevron Icon"
                className={styles.chevron_icon}
                width={11}
              />
              <span>brand</span>
            </button>
            <div className={styles.nav_dialog_grid}>
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
        </ul>
      </div>
    </header>
  );
};

export default NavbarMobile;
