"use client";

import Image from "next/image";

// RADIX-UI
import * as Accordion from "@radix-ui/react-accordion";

const AccordionMobile = ({ styles, data }) => {
  return (
    <div className={styles.tab_container_mobile}>
      <h2 className={styles.experience_title}>ownership experience</h2>
      <Accordion.Root
        id={styles.accordion_container_mobile}
        defaultValue={data[0].title}
      >
        {data.map((each, index) => (
          <Accordion.Item key={index} value={each.title}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordion_trigger}>
                {each.title}
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className={styles.accordion_content}>
              <Image
                width={1920}
                height={1080}
                src={each.imageUrl}
                alt={each.title}
                className={styles.accordion_image_mobile}
              />
              <p>{each.description}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default AccordionMobile;
