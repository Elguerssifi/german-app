"use client"
import Container from "../Container/Container";
import Accordion from "./Accordion";
import styles from "./Services.module.css"
interface ServicesProps {
  title: string;
  paragraph: React.ReactNode;
  items: { 
    title: React.ReactNode;
    content: React.ReactNode 
  }[];
}
const Services : React.FC<ServicesProps> = ({
  title,
  paragraph,
  items
}) => {
  return ( 
    <section className={styles.services_section} id="services">
      <Container>
        <div className={styles.services_title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.row}>
          <div className={styles.left_services}>
            <p>{paragraph}</p>
          </div>
          <div className={styles.right_services}>
            {items.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
              ))}
          </div>
        </div>
      </Container>
    </section>
   );
}
 
export default Services;