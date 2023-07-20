// STYLES
import styles from "@/public/styles/contact/contact.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

// DATA
import states from "@/app/data/states";
import Link from "next/link";

const Contact = () => {
  const categories = [
    "Purchase consultation",
    "test drive",
    "Vehicle General Maintenance",
    "Vehicle Special Maintenance",
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <section id={styles.contact_form}>
          <h2 className={styles.contact_title}>contact us</h2>
          <p className={styles.instructions}>
            Kindly furnish us with the following details and a genesis concierge
            will contact you shortly.
          </p>

          <form className={styles.contact_form}>
            <select
              id="model_name"
              className={styles.model_name}
              defaultValue="select purpose"
              required
            >
              <option value="select purpose" disabled>
                select purpose*
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
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
              required
              placeholder="phone number*"
              className={styles.phone}
            />
            <input
              type="text"
              placeholder="city*"
              required
              className={styles.city}
            />
            <div className={styles.location}>
              <select defaultValue={"select state"} required>
                <option value="select state" disabled>
                  select state*
                </option>
                {states.map((each, index) => (
                  <option key={index} value={each.name}>
                    {each.name}
                  </option>
                ))}
              </select>
              <input type="number" required placeholder="zip code*" />
            </div>
          </form>

          <p className={styles.form_condition}>
            * By submitting the above details, you consent to receiving
            telemarketing calls and/or texts at the provided number using an
            automatic telephone dialing system by, or on behalf of, Genesis and
            its authorized retailers. You understand and do not have to consent
            in order to purchase any products or services. Carrier charges may
            apply. Message and data rates may apply.
          </p>
          <button className={styles.form_button}>submit</button>
        </section>
        {/* SECONDARY CONTACT OPTIONS */}
        <section id={styles.contact_options}>
          <div className={styles.options_grid}>
            <div className={styles.phone_item}>
              <h4 className={styles.phone_title}>by phone</h4>
              <p className={styles.number}>(844)-340-9741</p>
              <div className={styles.office_hours}>
                <p>
                  Mon-Fri 5:00am - 5:00pm PST <br /> Sat 6:30am - 3:00pm PST{" "}
                  <br /> Sun Closed
                </p>
              </div>
              <div className={styles.assistance}>
                <p>
                  24/7 Roadside assistance: <br /> (844) 340-9742
                </p>
              </div>
            </div>

            <div className={styles.retailer_item}>
              <h4 className={styles.phone_title}>retailer inquiries</h4>
              <p>
                If your question is related to a Genesis vehicle, or you have a
                question about buying or leasing a Genesis, one of our many
                retailers can help you with the answer. Use the link below to
                find a retailer near you.
              </p>
              <Link href={"/retailer"}>retailer locator</Link>
            </div>

            <div className={styles.privacy_item}>
              <h4 className={styles.privacy_title}>privacy</h4>
              <p>
                Submit a request for access, deletion or opt out of the sale of
                personal information under applicable law.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Contact;
