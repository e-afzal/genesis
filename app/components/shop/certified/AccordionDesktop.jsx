"use client";

import Image from "next/image";
import { useState } from "react";

// RADIX-UI
import * as Accordion from "@radix-ui/react-accordion";

const AccordionDesktop = ({ styles, data }) => {
  const [currentImage, setCurrentImage] = useState(data[0].imageUrl);

  const handleImageChange = (val) => {
    const filteredCoverage = data.filter((each) => each.title === val);
    setCurrentImage(filteredCoverage[0].imageUrl);
  };

  return (
    <div className={styles.tab_container_desktop}>
      <div className={styles.tab_content}>
        <h2 className={styles.eligibility_title}>certification eligibility</h2>
        <Accordion.Root
          id={styles.accordion_container_desktop}
          defaultValue={data[0].title}
          onValueChange={(val) => handleImageChange(val)}
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
          className={styles.accordion_image}
          alt="Certification Eligibility"
          width={1708}
          height={960}
        />
      </div>
    </div>
  );
};

export default AccordionDesktop;
