import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      <Pagination />
    </div>
  );
};

export default CardList;
