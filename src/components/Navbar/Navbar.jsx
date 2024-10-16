import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} alt="facebook" width={24} height={24} />
        <Image src={"/Instagram.png"} alt="Instagram" width={24} height={24} />
        <Image src={"/github.png"} alt="github" width={24} height={24} />
        <Image src={"/LinkedIn.png"} alt="LinkedIn" width={24} height={24} />
      </div>

      <div className={styles.logo}>Pen and Pixel</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          {" "}
          HomePage
        </Link>
        <Link href="/" className={styles.link}>
          {" "}
          About
        </Link>
        <Link href="/" className={styles.link}>
          {" "}
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
