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
                  left: `${zoomPosition.x - 100}px`,
                  top: `${zoomPosition.y - 100}px`,
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
          <div className={styles.productPrice}>{`£${itemData.price}`}</div>
          <div className={styles.productRating}>
            <span role="img" aria-label="star">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
            (4 reviews)
          </div>
          <p className={styles.productDescription}>
            {itemData.description}
          </p>

          <div className={styles.sizeSelection}>
            SIZE: {selectedSize}
            <div className={styles.sizeOptions}>
              {itemData.sizes.split(', ').map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? styles.selectedSize : ''}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.quantityControl}>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
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
          <button className={styles.wishlist}>♡</button>

          <div className={styles.trustBadges}>
            {/* ... (trust badges) */}
          </div>

          <div className={styles.deliveryReturn}>
            Delivery & Return
          </div>
          <div className={styles.askQuestion}>Ask a Question</div>

          <div className={styles.availability}>Availability: In Stock</div>
          <div className={styles.categories}>Categories: Fashion</div>
          <div className={styles.tags}>
            Tags: Price $50-$150, Vendor Kalles, women
          </div>

          <div className={styles.socialIcons}>
            {/* ... (social icons) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItemPage;