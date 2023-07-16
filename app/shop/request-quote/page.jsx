// STYLES
import styles from "@/public/styles/shop/quote.module.scss";

// COMPONENTS
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import Footer from "@/app/components/Footer";

// DATA
import models from "@/app/data/models";

const Quote = () => {
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        {/* SECTION: UPDATES */}
        <section id={styles.updates}>
          <h2 className={styles.update_title}>get your price</h2>
          <p className={styles.instructions}>
            Kindly furnish us with the following details and a genesis concierge
            will contact you shortly to assist in finding your perfect genesis.
          </p>

          <form className={styles.update_form}>
            <select
              id="model_name"
              className={styles.model_name}
              defaultValue="select model"
            >
              <option value="select model" disabled>
                select model*
              </option>
              {models.map((model, index) => (
                <option key={index} value={model.modelName}>
                  Genesis {model.modelName}
                </option>
              ))}
            </select>
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
            * By submitting the above details, you consent to receiving
            telemarketing calls and/or texts at the provided number using an
            automatic telephone dialing system by, or on behalf of, Genesis and
            its authorized retailers. You understand and do not have to consent
            in order to purchase any products or services. Carrier charges may
            apply. Message and data rates may apply.
          </p>

          <button className={styles.form_button}>send enquiry</button>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Quote;
