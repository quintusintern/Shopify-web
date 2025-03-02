"use client";
import React, { useState } from "react";
import styles from "./Trending.module.css";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";

const initialCards = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    defaultImage: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    description: "A stylish and durable analogue resin strap.",
  },
  {
    title: "Ridley High Waist",
    price: "36.00",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    description: "Comfortable and fashionable high waist jeans.",
  },
  {
    title: "Blush Beanie",
    price: "15.00",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    description: "A warm and cozy blush beanie for winter.",
  },
  {
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    defaultImage: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "",
    description: "Elegant Cluse La Baheme rose gold watch.",
  },
];

export default function Trending({ openPopup }) { // Receive openPopup as prop
  const [cards, setCards] = useState(initialCards);

  const loadMoreCards = () => {
    const newCards = initialCards.map((card, index) => ({
      ...card,
      title: `Card ${cards.length + index + 1}`,
    }));

    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const handleQuickShop = (card) => {
    openPopup(card); // Call openPopup with the card data
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
                alt={`${card.title} second Image`}
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
                    <button
                      className={styles.btn}
                      onClick={() => handleQuickShop(card)}
                    >
                      Quick View
                    </button>
                    <button
                      className={styles.lightBlueBtn}
                      onClick={() => handleQuickShop(card)}
                    >
                      Quick Shop
                    </button>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardPrice}>{` $ ${card.price}`}</p>
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