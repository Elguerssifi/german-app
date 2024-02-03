"use client"
import Image from 'next/image';
import styles from './Hero.module.css'

interface HeroItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}
interface RightHeroProps {
  items: HeroItem[];
}
const RightHero : React.FC<RightHeroProps>= ({
  items
}) => {
  return ( 
    <div className={styles.hero_items}>
      {items.map((item, index) => (
        <div key={index} className={styles.hero_item}>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={50}
            height={50}
          />
          <h3>{item.title}</h3>
          {/* <p>{item.description}</p> */}
        </div>
      ))}
    </div>
   );
}
 
export default RightHero;