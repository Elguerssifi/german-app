// components/Accordion.tsx
"use client"
import { useState } from 'react';
import styles from './Services.module.css';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span >{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && 
        <div className={styles.accordionContent}>
          {content}
        </div>}
    </div>
  );
};

export default Accordion;
