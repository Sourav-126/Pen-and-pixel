import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <b>Hey! this is Pen And Pixel</b> Write Your Stories and Creative
        Ideas!😉
      </div>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="frontImage" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.postDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis
          suscipit reprehenderit rem rerum voluptatibus architecto veritatis
          neque facere, officia dignissimos, optio, voluptas officiis laboriosam
          voluptatem vel possimus at ipsa?
        </p>
        <button className={styles.button}>Read More! </button>
      </div>
    </div>
  );
};

export default Featured;
