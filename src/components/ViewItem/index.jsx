"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from './ViewItem.module.css';

const ViewItemPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [itemData, setItemData] = useState(null); // State to hold item data
  const [count, setCount] = useState(1);
  const increase = () => setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);
  useEffect(() => {
    // Retrieve item data from local storage or URL parameters
    const storedItem = localStorage.getItem('viewedItem');
    if (storedItem) {
      setItemData(JSON.parse(storedItem));
    } else {
      // Handle the case where no item data is found (e.g., show an error)
      console.error("No item data found in local storage.");
    }
  }, []);

  if (!itemData) {
    return <div>Loading...</div>; // Or display an error message
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleMouseEnter = (e) => {
    setIsZoomed(true);
    updateZoomPosition(e);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      updateZoomPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const updateZoomPosition = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomPosition({ x, y });
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumb}>
        Home &gt; {itemData.title}
      </div>

      <div className={styles.productContainer}>
        <div className={styles.imageGallery}>
          <div className={styles.thumbnail}>
            <img src={itemData.image} alt="Thumbnail 1" />
            <img src={itemData.hoverImage} alt="Thumbnail 2" />
            <img src={itemData.image} alt="Thumbnail 3" />
          </div>
        </div>

        <div
          className={styles.mainImage}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={itemData.hoverImage} alt={itemData.title} />
          {isZoomed && (
            <div
              className={styles.zoomLens}
              style={{
                left: `${zoomPosition.x - 50}px`,
                top: `${zoomPosition.y - 50}px`,
              }}
            ></div>
          )}
          {isZoomed && (
            <div
              className={styles.zoomedImage}
              style={{
                backgroundImage: `url('${itemData.hoverImage}')`,
                backgroundPosition: `-${zoomPosition.x * 2 - 100}px -${zoomPosition.y * 2 - 100}px`,
              }}
            ></div>
          )}
        </div>

        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>{itemData.title}</h1>
          <div className={styles.productPrice}>{`$${itemData.price}`}</div>
          <div className={styles.productRating}>
            <span className={styles.star}>⭐</span>
            <span className={styles.star}>⭐</span>
            <span className={styles.star}>⭐</span>
            <span className={styles.star}>⭐</span>
            <span className={styles.reviewText}>(4 reviews)</span>
          </div>
          <p className={styles.productDescription}>
            {itemData.description}
          </p>

          <div>
            <strong>SIZE: {selectedSize}</strong> {/* Show selected size */}
            <div className={styles.productsizes}>
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.activeSize : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantityContainer}>
              <button className={styles.quantityButton} onClick={decrease}>-</button>
              <span className={styles.count}>{count}</span>
              <button className={styles.quantityButton} onClick={increase}>+</button>
            </div>
            <Link href="/Check">
              <button
                className={styles.addToCart}
                onClick={() => {
                  const cartItem = {
                    title: itemData.title,
                    price: itemData.price,
                    image: itemData.image,
                  };
                  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                  existingCart.push(cartItem);
                  localStorage.setItem("cart", JSON.stringify(existingCart));
                  alert("Item added to cart!");
                }}
              >
                Add to Cart
              </button>
            </Link>

          </div>
          <div className={styles.securityBadges}>
            <img src="/addtocart.jpg" className={styles.securityIcon} />
          </div>
          <div className={styles.links}>
            <span>Delivery & Return</span>
            <span>Ask a Question</span>
          </div>
          {/* Product Info */}
          <p className={styles.availability}>
            <strong>Availability:</strong> In Stock
          </p>
          <p className={styles.categories}>
            <strong>Categories:</strong> Fashion
          </p>
          <p className={styles.tags}>
            <strong>Tags:</strong> Price $50-$150, Vendor Kalles, women
          </p>

        </div>
      </div>
    </div>
  );
};

export default ViewItemPage;