// QuickShopPopup.js
"use client";
import React from "react";
import styles from "./shopPopup.module.css";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";

const QuickShopPopup = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X/>
        </button>
        <img src={imageUrl} alt={title} className={styles.popupImage} />
        <h3>{title}</h3>
        <p>{description}</p>
        {selectedSize && <h4 className={styles.selected}>Size: {selectedSize}</h4>}{" "}
        {sizes && (
          <div className={styles.sizeSelector}>
            {sizes.split(", ").map((size) => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${
                  selectedSize === size ? styles.selectedSize : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        <button className={styles.addToCartBtn}>Add to Cart</button>
        <button className={styles.buyNowBtn}>Buy Now</button>
      </div>
    </div>
  );
};

export default QuickShopPopup;
