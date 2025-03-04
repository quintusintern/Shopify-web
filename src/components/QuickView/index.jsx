import React, { useState } from "react";
import styles from "./QuickViewModal.module.css";

const QuickViewModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [currentImage, setCurrentImage] = useState(0);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleImageChange = (direction) => {
    setCurrentImage((prev) => (prev + direction + product.images.length) % product.images.length);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalBody}>
          <div className={styles.imageSection}>
            <img src={product.images[currentImage]} alt="Product" className={styles.productImage} />
            <button className={styles.arrow} onClick={() => handleImageChange(-1)}>‹</button>
            <button className={styles.arrow} onClick={() => handleImageChange(1)}>›</button>
          </div>
          <div className={styles.detailsSection}>
            <h2>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.sizeSelector}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ""}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={styles.quantityControl}>
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className={styles.addToCart}>Add to Cart</button>
            <button className={styles.buyNow}>Buy It Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
