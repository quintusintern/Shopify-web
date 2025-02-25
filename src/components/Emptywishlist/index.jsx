"use client";

import React from "react";
import styles from "./EmptyWishlist.module.css";
import { Heart } from "lucide-react"; // Using Lucide icon, or you can use an image

const EmptyWishlist = () => {
  return (
    <div className={styles.emptyWishlist}>
      <Heart className={styles.emptyIcon} />
      <h2 className={styles.title}>Wishlist is empty.</h2>
      <p className={styles.description}>You don’t have any products in the wishlist yet.</p>
      <p className={styles.description}>
        You will find a lot of interesting products on our{" "}
        <a href="/shop" >"Shop"</a> page.
      </p>
    </div>
  );
};

export default EmptyWishlist;
