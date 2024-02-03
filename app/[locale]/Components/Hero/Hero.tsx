"use client"

import Container from "../Container/Container";
import styles from './Hero.module.css'
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

interface HeroProps {
  leftHeroTitle : string,
  leftHeroDescription : string,
  leftHeroLink1 : string,
  leftHeroLink2 : string,
  rightHeroItems: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
}

const Hero : React.FC<HeroProps> = ({
  leftHeroTitle,
  leftHeroDescription,
  leftHeroLink1,
  leftHeroLink2,
  rightHeroItems
}) => {
  return ( 
    <section id="#home" className={styles.home_section}>
      <Container>
        <div className={styles.row_home}>
          <LeftHero 
            leftHeroTitle={leftHeroTitle} 
            lefHeroDescription={leftHeroDescription}
            leftHeroLink1={leftHeroLink1}
            leftHeroLink2={leftHeroLink2}
          />
          <RightHero items={rightHeroItems}/>
        </div>
      </Container>
    </section>
   );
}
 
export default Hero;