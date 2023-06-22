"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/navbar_mobile.module.scss";

// ASSET IMPORT
import logo from "@/public/images/logo-white.svg";
import menu from "@/public/icons/menu.svg";
import chevron from "@/public/icons/chevron-down-white.svg";
import models from "../data/models";

const NavbarMobile = () => {
  const modelDialogRef = useRef(null);
  const shopDialogRef = useRef(null);
  const brandDialogRef = useRef(null);
  return (
    <>
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
            src={menu}
            alt="Navbar Hamburger Icon"
            className={styles.nav_mobile_menu_icon}
          />
        </nav>

        {/* MAIN OVERLAY */}
        <div className={styles.nav_mobile_main_overlay}>

          <ul className={styles.main_link_list}>
            <li className={styles.main_link_list_item}>
              <button className={styles.list_item_btn}>models</button>
              <Image
                src={chevron}
                alt="Chevron icon"
                className={styles.chevron_icon}
                width={13}
              />
            </li>
            <li className={styles.main_link_list_item}>
              <button className={styles.list_item_btn}>shop</button>
              <Image
                src={chevron}
                alt="Chevron icon"
                className={styles.chevron_icon}
                width={13}
              />
            </li>
            <li className={styles.main_link_list_item}>
              <button className={styles.list_item_btn}>brand</button>
              <Image
                src={chevron}
                alt="Chevron icon"
                className={styles.chevron_icon}
                width={13}
              />
            </li>
            <li className={styles.main_link_list_item}>
              <Link href="#" className={styles.list_item_link}>owners</Link>
            </li>
            <li className={styles.main_link_list_item}>
              <Link href="#" className={styles.list_item_link}>find a retailer</Link>
            </li>
          </ul>

          <div className={styles.nav_models_overlay}>
            <button className={styles.main_return_btn}>
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
                <Link href={"#"} key={index} className={`${styles.model_card}`}>
                  <Image src={model.image_url}
                    className={styles.model_card_image}
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
          {/* <div className={styles.nav_shop_overlay}>
            <h1>Shop</h1>
          </div>
          <div className={styles.nav_brand_overlay}>
            <h1>Brand</h1>
          </div> */}
        </div>
      </header>

    </>
  );
};

export default NavbarMobile;