"use client";
import React, { useState } from "react";
import styles from "./Trending.module.css";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";



const initialCards = [
  {
    title: "Analogue Resin Strap",
    description: "$ 30.00",
    defaultImage: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Ridley High Waist",
    description: "$36.00",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
  },
  {
    title: "Blush Beanie",
    description: "$15.00",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Cluse La Baheme Rose Gold",
    description: "$45.00",
    defaultImage: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
  },
  {
    title: "Mercury Tee",
    description: "$68.00",
    defaultImage: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "La Baheme Rose Gold",
    description: "$40.00",
    defaultImage: "/RoseGold01.jpg",
    hoverImage: "/public/RoseGold02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Cream women pants",
    description: "$35.00",
    defaultImage: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "Black mountain hat",
    description: "$35.00",
    defaultImage: "/hat01.jpg",
    hoverImage: "/hat02.jpg",
    sizes: "XS, S, M, L",
  },
];

export default function Trending() {
  const [cards, setCards] = useState(initialCards);

  const loadMoreCards = () => {
    const newCards = initialCards.map((card, index) => ({
      ...card,
      title: `Card ${cards.length + index + 1}`,
    }));

    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <h2>Trending</h2>
          <div className={styles.line}></div>
        </div>
        <p>Top view in this week</p>
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
                      <CiHeart className={styles.icon} />
                    </button>
                    <button className={`${styles.smallBtn} ${styles.btn2}`}>
                      <TbArrowsCross className={styles.icon} />
                    </button>
                  </div>
                  <div className={styles.centerButtons}>
                    <button className={styles.btn}>
                      Quick View
                    </button>
                    <button className={styles.lightBlueBtn}>Quick Shop</button>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardPrice}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.LoadMoreBtn} onClick={loadMoreCards}>
        Load More
      </button>
    </div>
  );
}
