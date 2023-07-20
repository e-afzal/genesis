// STYLES
import styles from "@/public/styles/warranty.module.scss";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

const Warranty = () => {
  const warrantyData = [
    {
      title: "battery",
      description:
        "Original equipment battery charge and / or replacement are/is covered for 24 months from The date of original retail delivery or date of first use, or 40,000 km, whichever comes first.",
    },
    {
      title: "air conditioner refrigerant charge",
      description:
        "Air conditioner refrigerant charge is covered for 12 months from the date of original retail delivery or date of first use. After that refrigerant charge is only covered as part of warranty covered repair to the air conditioning system.",
    },
    {
      title: "audio & multimedia system",
      description:
        "Audio/Multimedia system is covered for 36 months from the date of original retail delivery or date of first use or 100,000 Km, whichever comes first.",
    },
    {
      title: "tire information",
      description:
        "Tires originally equipped on Genesis vehicles are warranted by their respective manufacturer. If an original tire on your Genesis vehicle has a defect in material or workmanship, please contact the tire manufacturer or ask your authorized Retailer of Genesis Branded products for assistance.",
    },
    {
      title: "what is covered by the warranty",
      description: `Repair or replacement of any component originally manufactured by Hyundai that is found to be defective in material or workmanship under normal use and maintenance, except any item specifically referred to in the section "What is not covered".`,
    },
    {
      title: "obtaining warranty service",
      description:
        "Warranty service will be provided by an authorized Distributor/Retailer of Genesis Branded products without charge for parts or labor. This warranty will not apply to the warranty service performed by those other than an authorized Distributor/Retailer of Genesis Branded products.",
    },
    {
      title: "judgment of warranty claims",
      description:
        "Hyundai reserves the right to furnish final decision in all warranty claims.",
    },
    {
      title: "exclusion of all other warranty",
      description:
        "This warranty is given in place of all other warranties expressed or implied, including any warranty of merchantability of fitness which extends beyond the express description herein, and any other obligations on the part of Hyundai or authorized distributor/retailer of Genesis Branded products. No dealer or its or his agent or employee is authorized to extend or enlarge this warranty.",
    },
  ];
  const responsibility = [
    "Proper use, maintenance and care of your vehicle in accordance with the instructions contained in your Owner's Manual. (If your vehicle is subject to use under severe driving conditions, you should follow the maintenance requirements specified accordingly in your Owner's Manual.)",
    "Retain maintenance service records. It may be necessary for you to show that this required maintenance has been performed, as specified in the Owner's Manual.",
    "Deliver the vehicle during regular service business hours to any authorized Retailer of Genesis Branded products to obtain warranty service.",
    "Check for trim, paint or other appearance concerns at the time the new vehicle is delivered.",
  ];
  const uncovered = [
    {
      title: "Normal Maintenance Service:",
      points: [
        "Including checking, tightening, adjusting, engine tune-ups, fuel system adjustment, wheel to balancing, cleaning, lubrication, oil changes, replenishment of fuel, engine oil, transaxle fluid, brake fluid, clutch fluid, power steering fluid, battery electrolyte fluid, anti-freeze coolant, windshield washer fluid, air-conditioner refrigerant and tire rotation.",
      ],
    },
    {
      title: "Normal deterioration or wear of any part:",
      points: [
        "Spark plugs",
        "Worn brake pads / Linings",
        "Worn clutch linings / Discs",
        "Wiper blades",
        "Filters",
        "Bulbs and fuses",
        "V-belts",
        "Other wear and consumable items",
      ],
    },
    {
      title: "Damage or failure resulting from:",
      points: [
        "Negligence of proper maintenance as required in the Owner's Manual.",
        "Misuse, abuse, overload, accident, theft, water flooding, or fire.",
        "Use of improper or insufficient fuel, fluids, or lubricants.",
        "Use of non-genuine Genesis/Hyundai parts or accessories.",
        "Any device and / or accessories not supplied by Genesis/Hyundai.",
        "Modifications, alterations, tampering or improper repair.",
        "Deterioration or rubber parts, upholstery and soft trim under normal use and exposure.",
        "Slight irregularities not recognized as affecting quality of function of the vehicle or parts, such as or items considered characteristic of the vehicle.",
      ],
    },
    {
      title: "Incidental or consequential damages:",
      points: [
        "Such as fuel, telephone, travel, loading inconvenience, commercial and/or personal loss and loss of use of the vehicle.",
      ],
    },
    {
      title: "Extra expenses:",
      points: [
        " Any economic loss including (without limitation) payment for the loss of time or pay, inconvenience, loss of vehicle use, vehicle rental expense, lodging bills, food, other travel costs, storage charges and other incidental or consequential loss or damage.",
      ],
    },
    {
      title: "Others:",
      points: [
        "Any vehicle where the odometer mileage has been altered.",
        `Airborne "fallout", industrial fall-out, acid rain, salt, hail and wind storms, or other Acts of God.`,
        "Paint scratches, dents, or similar paint or body damage.",
        "Action of road elements (sand, gravel, dust or road debris) which results in stone chipping of paint and glass.",
        "Any paint defects or problems arising out of cargo compartment. (Trucks only)",
      ],
    },
  ];
  return (
    <body>
      <Navbar />
      <NavbarMobile />
      <main id={styles.main}>
        <h2 className={styles.warranty_title}>warranty</h2>

        <section id={styles.period}>
          <h3>warranty period</h3>
          <p>
            Any component, except the items specified hereafter, of your new
            Genesis vehicle is covered for 60 months from the date of original
            retail delivery or date of first use.
          </p>
          <ul>
            <li>
              COMMERCIAL USAGE: 60 months / 100,000 km Applies to all models
              regardless of use.
              <span>
                Note : Commercial Usage means that the vehicles has at any time
                been used or is currently used for a commercial vehicle,
                security vehicle, tour or bus operator and emergency services
                vehicle. Passenger vehicles used under commercial vehicle
                conditions will be limited to a 60 months / 100,000 km*
                warranty. *Whichever comes first{" "}
              </span>
            </li>
          </ul>
        </section>

        <section id={styles.paint}>
          <h3>paint</h3>
          <ul>
            <li>
              - Exterior Paint Durability and Finish – 60 months / 150,000 Km
              <span>
                Excludes defects defined as scaling, blistering, scab, and
                fading that result from insufficient or improper maintenance or
                care.
              </span>
            </li>
            <li>
              - Exterior Paint Application Defects – 12 months / 20,000 Km
              <span>
                Paint application defects will be considered to be overspray,
                low gloss, mismatch, mottling, cloudy, runs, fish eye, pin
                holes, slow drying, thin paint, waving, tape mark, touch mark,
                polishing/sanding mark, touch up, dust or dirt in the paint.
              </span>
            </li>
            <li>
              - Anti Perforation – 60 months / 150,000 Km
              <span>
                Perforation is identified as corrosion through the body panel
                (from inside to outside) of the original Genesis body sheet
                metal due to defects in material or factory workmanship. This
                excludes surface corrosion that may result from insufficient or
                Improper maintenance or care.
              </span>
            </li>
          </ul>
        </section>

        <section id={styles.uncovered}>
          <h3>what is not covered by the warranty</h3>
          <ul>
            {uncovered.map((each, index) => (
              <li key={index}>
                - {each.title}
                {each.points.map((each, index) => (
                  <span key={index}>{each}</span>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <section id={styles.paint}>
          <h3>owner's responsibility</h3>
          <ul>
            {responsibility.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </section>

        {warrantyData.map((each, index) => (
          <section key={index}>
            <h3>{each.title}</h3>
            <p>{each.description}</p>
          </section>
        ))}
      </main>
      <Footer />
    </body>
  );
};

export default Warranty;
