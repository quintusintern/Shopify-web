"use client";
import { useState , React } from "react";
import styles from "./Bestseller.module.css";

const cardsData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    defaultImage: "/Backpack01.jpg",
    hoverImage: "/Backpack02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    defaultImage: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    defaultImage: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    defaultImage: "/MenPants01.jpg",
    hoverImage: "/MenPants02.jpg",
  },
  {
    title: "Card 5",
    description: "Description for Card 5",
    defaultImage: "/Hoodie01.jpg",
    hoverImage: "/Hoodie02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "Card 6",
    description: "Description for Card 6",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 7",
    description: "Description for Card 7",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "Card 8",
    description: "Description for Card 8",
    defaultImage: "/snapback01.jpg",
    hoverImage: "/snapback02.jpg",
    sizes: "XS, S, M, L",
  },
];

export default function BestSeller() {
  const [cards, setCards] = useState(cardsData);

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
        {cards.map((card, index) => (
          <div key={index} className={styles.imgCard}>
            <div className={styles.imageWrapper}>
              <img
                src={card.defaultImage}
                alt={card.title}
                className={styles.imageDefault}
              />
              <img
                src={card.hoverImage}
                alt={`${card.title} hover`}
                className={styles.imageHover}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.topLeftButtons}>
                    <button className={`${styles.smallBtn} ${styles.btn1}`}>
                      🔍
                    </button>
                    <button className={`${styles.smallBtn} ${styles.btn2}`}>
                      ❤️
                    </button>
                  </div>
                  <div className={styles.centerButtons}>
                    <button className={styles.btn} data-hover="View Details">
                      Quick View
                    </button>
                    <button className={styles.lightBlueBtn}>Quick Shop</button>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>

            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
