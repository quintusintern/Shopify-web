// Popup component (QuickShopPopup.js)
"use client";
import React, { useState } from "react";
import styles from "./shopPopup.module.css";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";

const QuickShopPopup = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  price,
  description,
  sizes,
  selectedSize,
  setSelectedSize,
  addToCart,
}) => {
  if (!isOpen) return null;

  const handleAddToCart = () => {
    const item = {
      imageUrl,
      title,
      price,
      description,
      selectedSize,
    };
    addToCart(item);
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X/>
        </button>
        <img src={imageUrl} alt={title} className={styles.popupImage} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{`$ ${price}`}</p>
        {selectedSize && <h4 className={styles.selected}>Size: {selectedSize}</h4>}
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
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
        <button className={styles.buyNowBtn}>Buy Now</button>
      </div>
    </div>
  );
};

export default QuickShopPopup;