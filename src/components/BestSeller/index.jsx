"use client";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";
import QuickShopPopup from "@/components/QuickShopPopup";
import styles from "./Bestseller.module.css";

const cardsData = [
  {
    title: "Backpack",
    price: "36.00",
    defaultImage: "/Backpack01.jpg",
    hoverImage: "/Backpack02.jpg",
    sizes: "XS, S, M, L",
    description: "A stylish and durable analogue resin strap."
  },
  {
    title: "Women Pants",
    price: "24.99",
    defaultImage: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L",
    description: "Comfortable and breathable pants perfect for casual and formal wear."
  },
  {
    title: "Mercury Watch",
    price: "19.50",
    defaultImage: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "XS, S, M, L",
    description: "A sleek and modern timepiece with a minimalist design."
  },
  {
    title: "Men Pants",
    price: "29.99",
    defaultImage: "/MenPants01.jpg",
    hoverImage: "/MenPants02.jpg",
    description: "Premium quality men’s pants with a relaxed fit and stylish look."
  },
  {
    title: "Hoodie",
    price: "42.00",
    defaultImage: "/Hoodie01.jpg",
    hoverImage: "/Hoodie02.jpg",
    sizes: "S, M, L, XL, XXL",
    description: "Cozy and warm hoodie made from soft fleece for maximum comfort."
  },
  {
    title: "Ridley Jacket",
    price: "18.75",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "XS, S, M, L",
    description: "A trendy and lightweight jacket perfect for layering."
  },
  {
    title: "Blush Beanie",
    price: "12.50",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "S, M, L, XL, XXL",
    description: "Soft knit beanie to keep you warm and stylish in cold weather."
  },
  {
    title: "Snapback Cap",
    price: "15.99",
    defaultImage: "/snapback01.jpg",
    hoverImage: "/snapback02.jpg",
    sizes: "XS, S, M, L",
    description: "Classic snapback cap with an adjustable fit for everyday wear."
  }
];



export default function BestSeller() {
  const [cards, setCards] = useState(cardsData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const handleQuickShop = (card) => {
    setSelectedCard(card);
    setSelectedSize(card.sizes.split(", ")[0] || "");
  };

  const closePopup = () => {
    setSelectedCard(null);
    setSelectedSize("");
  };

  return (
    <>
      {" "}
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
                <p className={styles.cardPrice}>{card.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuickShopPopup
        isOpen={selectedCard !== null}
        onClose={closePopup}
        imageUrl={selectedCard?.defaultImage}
        title={selectedCard?.title}
        price={selectedCard?.price} // Add this line
        description={selectedCard?.description}
        sizes={selectedCard?.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </>
  );
}
