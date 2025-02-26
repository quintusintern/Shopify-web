"use client";

import React from "react";
import styles from "./WishlistBanner.module.css";

const WishlistBanner = () => {
  return (
    <div className={styles.wishlistContainer}>
      <div className={styles.wishlistContent}>
        <h2>Wishlist</h2>
        <p>View your wishlist products</p>
      </div>
    </div>
  );
};

export default WishlistBanner;
