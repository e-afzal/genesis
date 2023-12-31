//? For use on Homepage - Electrification section
"use client";

import Image from "next/image";

// RADIX-UI
import * as Accordion from '@radix-ui/react-accordion';

// STYLES
import stylesAccordion from "@/public/styles/accordionElectrify.module.scss";

const AccordionMobile = ({ styles, title, data }) => {

  return (
    <div className={styles.tab_container_mobile}>
      <h2 className={styles.electrification_title}>{title}</h2>
      <Accordion.Root
        id={stylesAccordion.accordion_container_mobile}
        defaultValue={data[0].value}
      >
        {data.map((each, index) => (
          <Accordion.Item key={index} value={each.value}>
            <Accordion.Header>
              <Accordion.Trigger className={stylesAccordion.accordion_trigger}>{each.title}</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={stylesAccordion.accordion_content}>
              <Image
                width={2880}
                height={1280}
                src={each.image}
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