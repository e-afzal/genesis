"use client";

import Image from "next/image";
import { useState } from "react";

// RADIX-UI
import * as Accordion from "@radix-ui/react-accordion";

const GlanceAccordion = ({ styles, data }) => {
  const [currentImage, setCurrentImage] = useState(data[0].imageUrl);

  const handleImageChange = (val) => {
    const feature = data.filter((feature) => feature.title === val);
    setCurrentImage(feature[0].imageUrl);
  };

  return (
    <div className={styles.feature_container_desktop}>
      <div className={styles.feature_content}>
        <Accordion.Root
          id={styles.feature_container_desktop}
          defaultValue={data[0].title}
          onValueChange={(val) => handleImageChange(val)}
          // collapsible
        >
          {data.map((each, index) => (
            <Accordion.Item key={index} value={each.title}>
              <Accordion.Header>
                <Accordion.Trigger className={styles.feature_trigger}>
                  {each.title}
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className={styles.feature_content}>
                <p>{each.description}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* IMAGE BOX */}
      <div className={styles.feature_image_box}>
        <Image
          src={currentImage}
          width={1920}
          height={1080}
          alt="feature"
          className={styles.feature_image}
        />
      </div>
    </div>
  );
};

export default GlanceAccordion;
