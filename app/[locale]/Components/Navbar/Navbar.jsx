"use client"

import { useRef, useState } from "react";
import Container from "../Container/Container";
import styles from './Navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import {FaTimes , FaBars} from 'react-icons/fa'

const Navbar = ({
  homeLink,
  servicesLink,
  contactLink,
}) => {
  const navRef = useRef();
  const [btnState,setBtnState] = useState(true)
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav)
    setBtnState((prev) => !prev)
  }
  return ( 
    <nav className={styles.navbar} ref={navRef}>
      <Container>
        <div className={styles.row}>
          <div className="logo">
            <Link href="#home">
              <Image 
                src="/Assets/logo.png"
                alt="logo arab-germany-consulting"
                width={120}
                height={40}
              />
            </Link>
          </div>
            <div className={styles.linkArea}>
              <Link href="#home">{homeLink}</Link>
              <Link href="#services">{servicesLink}</Link>
              <Link href="#contact">{contactLink}</Link>
            </div> 
            <div className={styles.languageArea}>
              <Link href="en" scroll={false}>EN</Link>
              <Link href="de" scroll={false}>DE</Link>
            </div>
            <button onClick={showNavbar} className={styles.toggle_btn}>
              {btnState ? <FaBars size={24}/> : <FaTimes size={24}/>}
            </button>
              <div className={styles.responsive_links}>
                <div className={styles.website_links}>
                  <Link href="#home" onClick={showNavbar}>{homeLink}</Link>
                  <Link href="#services" onClick={showNavbar}>{servicesLink}</Link>
                  <Link href="#contact" onClick={showNavbar}>{contactLink}</Link>
                </div>
                <div className={styles.language_options}>
                  <Link href="en" scroll={false}>EN</Link>
                  <Link href="de" scroll={false}>DE</Link>
                </div>
              </div>
        </div>
      </Container>
    </nav>
   );
}
 
export default Navbar;