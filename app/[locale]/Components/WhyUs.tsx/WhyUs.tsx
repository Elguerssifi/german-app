"use client"

import Container from "../Container/Container";
import styles from './WhyUs.module.css'
import { GrValidate } from "react-icons/gr";

interface WhyUsProps {
  items: string[];
  title: string;
}

const WhyUs : React.FC<WhyUsProps> = ({
  items,
  title
}) => {
  return (
    <section className={styles.why_us_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.why_us_left}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
            <div className={styles.shape4}></div>
          </div>
          <div className={styles.why_us_right}>
            <div className={styles.why_us_title}>
              <h4>{title}</h4>
            </div>
            <div className={styles.why_us_items}>
              <ul>
                {items.map((item: string, index: number) => (
                  <li key={index}>
                    <GrValidate />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              {/* <ul>
                <li>
                  <GrValidate />
                  <p>
                    Intercultural Competence. We are at home in Morocco and at home in Germany!
                  </p>
                </li>
                <li>
                  <GrValidate />
                  <p>
                    Excellent network
                  </p>
                </li>
                <li>
                  <GrValidate />
                  <p>
                    Extensive contacts in politics, business and society
                  </p>
                </li>
                <li>
                  <GrValidate />
                  <p>
                    We act as your partner and work completely independently and neutrally
                  </p>
                </li>
                <li>
                  <GrValidate />
                  <p>
                    Over 10 years of experience in plant engineering
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </Container>
    </section> 
    );
}
 
export default WhyUs;