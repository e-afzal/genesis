//? For use on Homepage - Electrification section
"use client";

import Image from "next/image";
import { useState } from "react";

// RADIX-UI
import * as Accordion from '@radix-ui/react-accordion';

// STYLES
import stylesAccordion from "@/public/styles/accordionElectrify.module.scss";

// ASSET IMPORT
import present from "@/public/images/homepage/electrification/present.jpg";
import limitless from "@/public/images/homepage/electrification/limitless.jpg";
import complimentary from "@/public/images/homepage/electrification/complimentary.jpg";
import G90 from "@/public/images/homepage/excellence/G90.jpg";
import GV70 from "@/public/images/homepage/excellence/GV70.jpg";


const AccordionDesktop = ({ styles, title, data, imageToUse }) => {
  //? Since this component is being shared, we need to pass 'imageToUse' to set the default image 
  const imageToUseasDefault = imageToUse === "electrification" ? present : G90;
  const [currentImage, setCurrentImage] = useState(imageToUseasDefault);

  const handleImageChange = (val) => {
    if (val === "limitless") setCurrentImage(limitless);
    if (val === "complimentary") setCurrentImage(complimentary);
    if (val === "present") setCurrentImage(present);
    if (val === "G90") setCurrentImage(G90);
    if (val === "GV70") setCurrentImage(GV70);
  };

  return (
    <div className={styles.tab_container_desktop}>
      <div className={styles.tab_content}>
        <h2 className={styles.electrification_title}>{title}</h2>
        <Accordion.Root
          id={stylesAccordion.accordion_container_desktop}
          defaultValue={data[0].value}
          onValueChange={(val) => handleImageChange(val)}
        // collapsible
        >
          {data.map((each, index) => (
            <Accordion.Item key={index} value={each.value}>
              <Accordion.Header>
                <Accordion.Trigger className={stylesAccordion.accordion_trigger}>{each.title}</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={stylesAccordion.accordion_content}>
                <p>
                  {each.description}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* IMAGE BOX */}
      <div className={styles.tab_image_box}>
        <Image
          src={currentImage}
          alt="electrification image"
          className={styles.accordion_image}
        />
      </div>
    </div>
  );
};

export default AccordionDesktop;