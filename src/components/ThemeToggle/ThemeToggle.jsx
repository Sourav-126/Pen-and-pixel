"use client";

import React, { useContext } from "react";
import styles from "./themetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { left: 1, background: "#0f172a" }
          : { right: 1, background: "white" }
      }
    >
      <Image src="/moon.png" alt="" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
