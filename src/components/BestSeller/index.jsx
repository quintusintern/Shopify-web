import React from "react";
import styles from "./Bestseller.module.css";

const cardsData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 5",
    description: "Description for Card 5",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 6",
    description: "Description for Card 6",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 7",
    description: "Description for Card 7",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 8",
    description: "Description for Card 8",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
];

export default function BestSeller() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <h2>Best Seller</h2>
          <div className={styles.line}></div>
        </div>
        <p>Top sale in this week</p>
      </div>

      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.imgCard}>
            <div className={styles.imageWrapper}>
              <img src={card.defaultImage} alt={card.title} className={styles.imageDefault} />
              <img src={card.hoverImage} alt={`${card.title} hover`} className={styles.imageHover} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
