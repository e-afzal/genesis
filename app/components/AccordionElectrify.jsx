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


const AccordionElectrify = ({ styles }) => {
  const [currentImage, setCurrentImage] = useState(present);

  const handleImageChange = (val) => {
    if (val === "item2") setCurrentImage(limitless);
    if (val === "item3") setCurrentImage(complimentary);
    if (val === "item1") setCurrentImage(present);
  };

  return (
    <div className={styles.tab_container_desktop}>
      <div className={styles.tab_content}>
        <h2 className={styles.electrification_title}>electrify every drive</h2>
        <Accordion.Root
          id={stylesAccordion.accordion_container_desktop}
          defaultValue="item1"
          onValueChange={(val) => handleImageChange(val)}
        // collapsible
        >
          <Accordion.Item value="item1">
            <Accordion.Header>
              <Accordion.Trigger className={stylesAccordion.accordion_trigger}>live in the present. plan for tomorrow.</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={stylesAccordion.accordion_content}>
              <p>
                Genesis blends audacious design and advanced engineering to create a growing EV collection generously equipped with ultra-fast charge times, luxurious features, and all the power you can ask for. And we're just getting started.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item2">
            <Accordion.Header>
              <Accordion.Trigger className={stylesAccordion.accordion_trigger}>feel limitless</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={stylesAccordion.accordion_content}>
              <p>With high-capacity batteries that recharge from 10 to 80 percent in under 25 minutes* at DC Fast Charging stations, you’ll spend more time doing the things that move you. </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item3">
            <Accordion.Header>
              <Accordion.Trigger className={stylesAccordion.accordion_trigger}>enjoy complimentary charging</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={stylesAccordion.accordion_content}>
              <p>Receive three years of complimentary 30-minute DC fast charging sessions* across Electrify America’s network of more than 700 high-powered EV charging stations.</p>
            </Accordion.Content>
          </Accordion.Item>
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

export default AccordionElectrify;