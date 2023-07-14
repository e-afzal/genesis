import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "@/public/styles/brand/cares.module.scss";

// COMPONENTS
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";

// ASSET IMPORTS
import concierge from "@/public/images/brand/cares/concierge.jpg";
import valetMobile from "@/public/images/brand/cares/valet_mobile.jpg";

const Cares = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: SHOWCASE */}
        <section id={styles.showcase}>
          <div className={styles.showcase_content}>
            <h2>genesis cares</h2>
            <p>
              Offering programs such as Genesis Concierge and Service Valet,
              Genesis Cares is an initiative that focuses on tangible services
              that go above and beyond for Genesis owners. Because a
              relationship means we are in this together.
            </p>
            <Link href={"#"}>contact genesis concierge</Link>
          </div>
        </section>

        {/* SECTION: CONCIERGE */}
        <section id={styles.concierge}>
          <div className={styles.concierge_container}>
            {/* CONTENT */}
            <div className={styles.concierge_content}>
              <h3 className={styles.concierge_title}>genesis concierge</h3>
              <p className={styles.concierge_body}>
                The easiest and newest way to shop for a vehicle, Genesis
                Concierge is a Genesis Cares program offering complimentary
                personal shopping services. Connect with your concierge to ask
                questions, book a test drive, request information or even check
                inventory. Whatever you need. On your terms.
              </p>
              <Link href={"#"}>discover concierge services</Link>
            </div>

            {/* IMAGE BOX */}
            <div className={styles.concierge_image_box}>
              <Image
                width={1440}
                height={640}
                src={concierge}
                alt="concierge services"
              />
            </div>
          </div>
        </section>

        {/* SECTION: VALET */}
        <section id={styles.valet}>
          <div className={styles.valet_content}>
            <h2 className={styles.valet_title}>genesis service valet</h2>
            <p className={styles.valet_description}>
              In these uncertain times, we want you to rest easy knowing you can
              stay home if your vehicle needs servicing. With complimentary
              Genesis Service Valet, through your participating retailer, we
              send a team member to pick up and drop off your Genesis vehicle
              for service while leaving you a courtesy replacement, ensuring an
              effortless and safe experience.
            </p>
            <Link href={"/owners"}>schedule service</Link>
          </div>
        </section>

        <section id={styles.valet_mobile}>
          <Image
            className={styles.valet_mobile_image}
            src={valetMobile}
            alt="Interior of the Genesis G90"
          />
          <div className={styles.valet_content}>
            <h2 className={styles.valet_title}>genesis service valet</h2>
            <p className={styles.valet_description}>
              In these uncertain times, we want you to rest easy knowing you can
              stay home if your vehicle needs servicing. With complimentary
              Genesis Service Valet, through your participating retailer, we
              send a team member to pick up and drop off your Genesis vehicle
              for service while leaving you a courtesy replacement, ensuring an
              effortless and safe experience.
            </p>
            <Link href={"/owners"}>schedule service</Link>
          </div>
        </section>

        {/* SECTION: UPDATES */}
        <section id={styles.updates}>
          <h2 className={styles.update_title}>get updates</h2>

          <form className={styles.update_form}>
            <div className={styles.name_grid}>
              <input
                type="text"
                className={styles.fName}
                placeholder="first name*"
                required
              />
              <input
                type="text"
                className={styles.lName}
                placeholder="last name*"
                required
              />
            </div>
            <input
              type="email"
              className={styles.email}
              placeholder="email*"
              required
            />
            <input
              type="number"
              className={styles.zipCode}
              placeholder="zip code*"
              required
            />
          </form>

          <p className={styles.form_condition}>
            Receive localized news and offers for your area. By clicking or
            tapping the "SEND ME UPDATES" button, I acknowledge that I have read
            and agree to Genesis's Privacy Policy and Terms of Use.
          </p>

          <button className={styles.form_button}>send me updates</button>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Cares;
