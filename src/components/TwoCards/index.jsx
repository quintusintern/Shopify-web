import React, { useState } from "react";
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
      {cardsData.map((card, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={card.defaultImage}
            alt={card.title}
            className={styles.imageDefault}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
