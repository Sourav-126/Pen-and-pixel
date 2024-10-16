import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Categories!</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            height={34}
            width={34}
            className={styles.image}
          />
          Style!
        </Link>
        \{" "}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            height={34}
            width={34}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            height={34}
            width={34}
            className={styles.image}
          />
          Fashion!
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            height={34}
            width={34}
            className={styles.image}
          />
          Travel
        </Link>{" "}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            height={34}
            width={34}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;