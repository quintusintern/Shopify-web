"use client"; // 👈 Add this at the top

import React from "react";
import styles from "./TwoCards.module.css";

const cardsData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    defaultImage: "/slider-01.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    defaultImage: "/slider-01.jpg",
    sizes: "S, M, L",
  },
];

export default function TwoCards() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.imageWrapper}>
        <img
          src="/slider-01.jpg"
          alt="slider-01"
          className={styles.imageLeft}
        />
        <div className="twoOverlay">
          <h3>lOOKBOOK 2025</h3>
          <p>MAKE LOVE THIS LOOK</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/slider-02.jpg"
          alt="slider-02"
          className={styles.imageRight}
        />
        <div className="twoOverlay">
          <p>SUMMER SALE</p>
          <h2>UP TO 70%</h2>
        </div>
      </div>
    </div>
  );
}
