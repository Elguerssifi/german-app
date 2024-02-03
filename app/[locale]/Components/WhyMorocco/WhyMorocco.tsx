"use client"
import Container from "../Container/Container";
import styles from './WhyMorocco.module.css'

interface WhyMoroccoProps {
  title: string;
  contentHeader: React.ReactNode;
  contentBody: React.ReactNode;
}

const WhyMorocco : React.FC<WhyMoroccoProps> = ({
  title,
  contentHeader,
  contentBody,
}) => {
  return ( 
    <section className={styles.why_morocco_section}>
      <Container>
        <div className={styles.why_morocco_title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.row}>
          <div className={styles.why_morocco_header}>
            {contentHeader}
          </div>
          <div className={styles.why_morocco_body}>
            {contentBody}
          </div>
        </div>
      </Container>
    </section>
   );
}
 
export default WhyMorocco;