import Link from "next/link";

// STYLES
import styles from "@/public/styles/privacy_glance.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

const PrivacyGlance = () => {
  const policies = [
    {
      title: "types of data we collect",
      points: [
        "Personal identifiers",
        "Customer records",
        "Subscription information",
        "Vehicle data ",
        "Biometrics data",
        "Browsing data",
      ],
    },
    {
      title: "how we use your data",
      points: [
        "Providing services",
        "Safety, recall, warranty",
        "Improving our services and offerings",
        "Personalizing content",
        "Promotional purposes",
      ],
    },
    {
      title: "exercise your rights",
      points: [
        "Access and update your information",
        "Opting out",
        "Personal information request",
        "Contact us",
      ],
    },
    {
      title: "cookies and tracking",
      points: [
        "We collect certain information about your browsing sessions using cookies. For more details, click the below link.",
      ],
    },
    {
      title: "who we share your data with",
      points: [
        "Affiliates, subsidiaries, and dealers",
        "Service providers and suppliers",
        "Marketing partners",
        "Payment processors",
        "Third parties to comply with lawful requests",
      ],
    },
    {
      title: "when we may collect information about you",
      points: [
        "Fill out a contact form on our site or at our events",
        "Purchase a vehicle at the dealership ",
        "Get your vehicle serviced",
        "Enroll in and use connected vehicle technologies and services (Remote Services, Guidance, Roadside Assistance)",
        "Use our apps",
        "Contact our customer service center ",
        "Participate in a survey, sweepstakes, or contest",
      ],
    },
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <h2 className={styles.policies_title}>your privacy at a glance</h2>
        <section id={styles.policies}>
          <div className={styles.policies_grid}>
            {policies.map((each, index) => (
              <div key={index} className={styles.policy_container}>
                <h3>{each.title}</h3>
                <ul>
                  {each.points.map((each, index) => (
                    <li key={index}>{each}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section id={styles.details}>
          <h2>
            for more information about our privacy policies,{" "}
            <Link href={"/privacy-policy"}>click here</Link>.
          </h2>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default PrivacyGlance;
