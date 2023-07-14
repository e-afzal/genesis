import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/footer.module.scss";
import models from "../data/models";

// ASSET IMPORT
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import youtubeIcon from "@/public/icons/youtube.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import logo from "@/public/images/logo-white.svg";

const Footer = () => {
  //? DOM ELEMENTS
  const shopLinks = [
    { title: "search inventory", url: "/" },
    { title: "build your own", url: "/" },
    { title: "request a quote", url: "/" },
    { title: "schedule a test drive", url: "/" },
    { title: "shop parts and accessories", url: "/" },
    { title: "genesis certified", url: "/" },
    { title: "special offers", url: "/" },
    { title: "estimate trade-in value", url: "/" },
    { title: "genesis finance", url: "/" },
  ];
  const brandLinks = [
    { title: "our story", url: "/brand" },
    { title: "accolades", url: "/brand/accolades" },
    { title: "events", url: "/" },
    { title: "genesis house", url: "/" },
    { title: "genesis cares", url: "/" },
  ];
  const ownerLinks = [{ title: "my genesis", url: "/owners" }];
  const miscellaneous_links = [
    { title: "sitemap", url: "/" },
    { title: "warranty", url: "/" },
    { title: "terms of use", url: "/" },
    { title: "privacy policy", url: "/" },
  ];

  return (
    <>
      <footer id={styles.footer_primary}>
        <div className={styles.primary_links_container}>
          {/* MODEL LINKS */}
          <div className={styles.model_container}>
            <h4 className={styles.model_links_title}>models</h4>
            <ul className={styles.model_links}>
              {models.map((model, index) => (
                <li key={index}>
                  <Link href={`/models/${model.slug}`}>{model.modelName}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* SHOP LINKS */}
          <div className={styles.shop_container}>
            <h4 className={styles.shop_links_title}>shop</h4>
            <ul className={styles.shop_links}>
              {shopLinks.map((each, index) => (
                <li key={index}>
                  <Link href={each.url}>{each.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* BRAND LINKS */}
          <div className={styles.brand_container}>
            <h4 className={styles.brand_links_title}>brand</h4>
            <ul className={styles.brand_links}>
              {brandLinks.map((each, index) => (
                <li key={index}>
                  <Link href={each.url}>{each.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* OWNER LINKS */}
          <div className={styles.owner_container}>
            <h4 className={styles.owner_links_title}>owners</h4>
            <ul className={styles.owner_links}>
              {ownerLinks.map((each, index) => (
                <li key={index}>
                  <Link href={each.url}>{each.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* SUPPORT */}
          <div className={styles.support_container}>
            <h4 className={styles.support_links_title}>support</h4>
            <ul className={styles.support_links}>
              <li>
                <Link href={"/"}>contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer id={styles.footer_secondary}>
        <div className={styles.secondary_links_container}>
          <ul className={styles.miscellaneous_links}>
            {miscellaneous_links.map((each, index) => (
              <li key={index}>
                <Link href={each.url}>{each.title}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.social_links}>
            <Link
              href="https://www.facebook.com/GenesisMotorAmerica"
              target="_blank"
            >
              <Image src={facebookIcon} alt="Facebook Social Icon" />
            </Link>
            <Link
              href={"https://www.instagram.com/genesis_usa"}
              target="_blank"
            >
              <Image src={instagramIcon} alt="Instagram Social Icon" />
            </Link>
            <Link href={"https://www.youtube.com/genesisusa"} target="_blank">
              <Image src={youtubeIcon} alt="YouTube Social Icon" />
            </Link>
            <Link href={"https://twitter.com/GenesisUSA"} target="_blank">
              <Image src={twitterIcon} alt="Twitter Social Icon" />
            </Link>
          </div>
        </div>
        <div className={styles.copyright_container}>
          <Image src={logo} alt="Genesis Brand Logo" width={133} />
          <p>&#169; Copyright 2023 Hyundai Motor Company</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
