"use client";

import Image from "next/image";
import { useState } from "react";

// RADIX-UI
import * as Accordion from "@radix-ui/react-accordion";

const AccordionDesktop = ({ styles, data }) => {
  const [currentImage, setCurrentImage] = useState(data[0].imageUrl);

  const handleImageChange = (val) => {
    const accessory = data.filter((accessory) => accessory.title === val);
    setCurrentImage(accessory[0].imageUrl);
  };

  return (
    <div className={styles.tab_container_desktop}>
      <div className={styles.tab_content}>
        <Accordion.Root
          id={styles.accordion_container_desktop}
          defaultValue={data[0].title}
          onValueChange={(val) => handleImageChange(val)}
          // collapsible
        >
          {data.map((each, index) => (
            <Accordion.Item key={index} value={each.title}>
              <Accordion.Header>
                <Accordion.Trigger className={styles.accordion_trigger}>
                  {each.title}
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className={styles.accordion_content}>
                <p>{each.description}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* IMAGE BOX */}
      <div className={styles.tab_image_box}>
        <Image
          src={currentImage}
          width={1920}
          height={1080}
          alt="Experience"
          className={styles.accordion_image}
        />
      </div>
    </div>
  );
};

export default AccordionDesktop;
