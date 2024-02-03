"use client"
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Footer.module.css"
import Link from "next/link";

import { TbBrandAuth0 } from "react-icons/tb";
import { 
    FaBuildingColumns,
    FaLocationDot ,
    FaSquarePhone ,
    FaFax,
    FaGlobe
} from "react-icons/fa6";
import { HiMiniIdentification } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

interface footerProps {
  responsabilityContent : React.ReactNode;
  websiteInfoContent : React.ReactNode;
  language : string;
}

const Footer : React.FC<footerProps> = ({
  responsabilityContent,
  websiteInfoContent,
  language
}) => {
  return ( 
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Image 
                src="/Assets/logo.png"
                alt="logo arab-germany-consulting"
                width={120}
                height={40}
              />
          </div>
          <div className={styles.responsabl_content_info}>
            {responsabilityContent}
          </div>
          <div className={styles.website_content_info}>
            {websiteInfoContent}
          </div>
          <div className={styles.lang_option}>
            <h4>{language}</h4>
            <div>
              <Link href={"en"} scroll={false}>EN</Link>
              <Link href={"de"} scroll={false}>DE</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
   );
}
 
export default Footer;