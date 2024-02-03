"use client"
import Link from 'next/link';
import styles from './Hero.module.css'
import { 
  MdContactPhone ,
  MdDesignServices 
} from "react-icons/md";


interface LeftHeroProps {
  leftHeroTitle : string,
  lefHeroDescription : string,
  leftHeroLink1 : string,
  leftHeroLink2 : string,
}

const LeftHero : React.FC<LeftHeroProps> = ({
  leftHeroTitle,
  lefHeroDescription,
  leftHeroLink1,
  leftHeroLink2
}) => {
  return ( 
    <div className={styles.left_hero}>
      <div className={styles.left_hero_info}>
        <h1>{leftHeroTitle}</h1>
        <p>{lefHeroDescription}</p>
      </div>
      <div className={styles.left_hero_link}>
        <Link href="#contact">
          <MdContactPhone size={18}/>
          {leftHeroLink1}
        </Link>
        <Link href="#services">
          <MdDesignServices size={18}/>
          {leftHeroLink2}
        </Link>
      </div>
    </div>
   );
}
 
export default LeftHero;