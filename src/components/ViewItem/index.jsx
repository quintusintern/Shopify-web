"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./ViewItem.module.css";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Tabs from '../ProductInformation';
import ProductTabs from "../ProductInformation";
const ViewItemPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [itemData, setItemData] = useState(null);
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState("");

  const increase = () => setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  useEffect(() => {
    const storedItem = localStorage.getItem("viewedItem");
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      setItemData(parsedItem);
      setMainImage(parsedItem.hoverImage);
    } else {
      console.error("No item data found in local storage.");
    }
  }, []);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productPage}>
        <div className={styles.breadcrumb}>Home &gt; {itemData.title}</div>
        <div className={styles.productContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageGallery}>
              <div className={styles.thumbnail}>
                <img
                  src={itemData.image}
                  alt="Thumbnail 1"
                  onClick={() => handleImageClick(itemData.image)}
                />
                <img
                  src={itemData.hoverImage}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(itemData.hoverImage)}
                />
                <img
                  src={itemData.image}
                  alt="Thumbnail 3"
                  onClick={() => handleImageClick(itemData.image)}
                />
              </div>
            </div>
            <div className={styles.mainImageContainer}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseMove={(e) => {
                if (isZoomed) {
                  const rect = e.target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  setZoomPosition({ x, y });
                }
              }}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={mainImage}
                alt={itemData.title}
                className={styles.mainImage}
              />

              {isZoomed && (
                <div
                  className={styles.zoomPopup}
                  style={{
                    backgroundImage: `url('${mainImage}')`,
                    backgroundSize: "200%",
                    backgroundPosition: `-${zoomPosition.x * 2}px -${zoomPosition.y * 2
                      }px`,
                  }}
                ></div>
              )}
            </div>
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
            <p className={styles.productDescription}>{itemData.description}</p>

            <div>
              <strong>SIZE: {selectedSize}</strong>
              <div className={styles.productsizes}>
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.activeSize : ""
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.quantityContainer}>
                <button className={styles.quantityButton} onClick={decrease}>
                  -
                </button>
                <span className={styles.count}>{count}</span>
                <button className={styles.quantityButton} onClick={increase}>
                  +
                </button>
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
                    const existingCart =
                      JSON.parse(localStorage.getItem("cart")) || [];
                    existingCart.push(cartItem);
                    localStorage.setItem("cart", JSON.stringify(existingCart));
                    alert("Item added to cart!");
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
            <div className={styles.socialIcons}>
              <CiFacebook size={18} />
              <FaXTwitter size={18} />
              <FaPinterestP size={18} />
              <FaTumblr size={18} />
              <BsTelegram size={18} />
              <CiMail size={18} />
            </div>
          </div>

        </div>

      </div>
      <ProductTabs />
    </div>
  );
};

export default ViewItemPage;
