"use client";

import React from "react";
import styles from './Location.module.css';

const LocationMap = () => {
  return (
    <>
      <div className={styles.wishlistHero}>
        <div className={styles.imageContainer}>
          <img src="/Location.jpg" alt="Wishlist hero" />
        </div>
        <div className={styles.overlay}>
          <h3>Store locator</h3>
          <p>Home &gt; Store locator</p>
        </div>
      </div>

    
    </>
  );
};

export default LocationMap;
