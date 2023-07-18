"use client";

// COMPONENT CREATED FOR "CLIENT" FAQ SECTION
import * as Accordion from "@radix-ui/react-accordion";

// STYLES
import styles from "@/public/styles/shop/inventory_accordion.module.scss";

const AccordionInventory = ({ interior, exterior, mechanic, safety }) => {
  return (
    <Accordion.Root
      id={styles.accordion_container}
      collapsible
      defaultValue={"item1"}
    >
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger className={styles.accordion_trigger}>
            Interior
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.accordion_content}>
          <ul className={styles.accordion_list}>
            {interior.map((each, index) => (
              <li key={index} className={styles.accordion_list_items}>
                {each}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item2">
        <Accordion.Header>
          <Accordion.Trigger className={styles.accordion_trigger}>
            Exterior
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.accordion_content}>
          <ul className={styles.accordion_list}>
            {exterior.map((each, index) => (
              <li key={index} className={styles.accordion_list_items}>
                {each}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item3">
        <Accordion.Header>
          <Accordion.Trigger className={styles.accordion_trigger}>
            Mechanic
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.accordion_content}>
          <ul className={styles.accordion_list}>
            {mechanic.map((each, index) => (
              <li key={index} className={styles.accordion_list_items}>
                {each}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item4" className={styles.last_item_container}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.accordion_trigger}>
            Safety
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.accordion_content}>
          <ul className={styles.accordion_list}>
            {safety.map((each, index) => (
              <li key={index} className={styles.accordion_list_items}>
                {each}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionInventory;
