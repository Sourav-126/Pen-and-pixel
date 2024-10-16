import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpg" alt="" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.date}>11:02:2024 - </span>
        <span className={styles.category}> Culture</span>
        <h1 className={styles.title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          laudantium! Aperiam aliquid dolores quaerat sit, illo atque labore
          numquam? Aperiam placeat debitis a facilis, beatae natus sit!
          Provident, corrupti rem?
        </p>
        <Link href="" className={styles.link}>
          Read More!
        </Link>
      </div>
    </div>
  );
};

export default Card;
