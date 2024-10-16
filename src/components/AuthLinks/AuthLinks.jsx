"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
// import { set } from "mongoose";
const AuthLinks = () => {
  const status = "Authenticated";
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "unAuthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link> <span>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
