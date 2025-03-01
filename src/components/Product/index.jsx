"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFilter, FaBars } from "react-icons/fa";

import styles from "./Product.module.css";

const categories = [
  "New Arrival", "Decor", "Denim", "Dress", "Hats", "Men", "Sale", "Shoes", "Women"
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New Arrival");
  const [selectedOption, setSelectedOption] = useState("Alphabetically, A-Z");
  const [activeLayout, setActiveLayout] = useState("list");
  const [showUI, setShowUI] = useState(false); // Modal State
  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          {categories.map((category) => (
            <li key={category}>
              <Link href="#" legacyBehavior>
                <a 
                  className={selectedCategory === category ? styles.active : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className={styles.wishlistHero}>
        <div className={styles.imageContainer}>
          <img src={`/images/${selectedCategory.toLowerCase().replace(/\s/g, "-")}.jpg`} alt={selectedCategory} />
        </div>
        <div className={styles.overlay}>
          <h3>{selectedCategory}</h3>
          <p>View your {selectedCategory} products</p>
        </div>
      </div>

      
      <div className={styles.filterContainer}>
       
        {/* Layout Switcher (Grid/List) */}
        <div className={styles.pageContainer}>
      {/* Section Boxes */}
      <div className={styles.sectionContainer}>
        <div className={styles.outerBox} onClick={() => setShowUI(false)}>
          <div className={`${styles.innerContainer} ${styles.oneSection}`}>
            <div className={styles.innerSection}></div>
          </div>
        </div>

        <div className={styles.outerBox} onClick={() => setShowUI(!showUI)}>
          <div className={`${styles.innerContainer} ${styles.twoSection}`}>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
          </div>
        </div>

        <div className={styles.outerBox}>
          <div className={`${styles.innerContainer} ${styles.threeSection}`}>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
          </div>
        </div>

        <div className={styles.outerBox}>
          <div className={`${styles.innerContainer} ${styles.fourSection}`}>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
            <div className={styles.innerSection}></div>
          </div>
        </div>
      </div>

      {/* Product Grid with Enhanced UI */}
      <div style={{ marginTop: "20px" }}>
        {showUI && (
          <div className={styles.gridContainer}>
            <div className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src="/images/hoodie.png" alt="Combat Hoodie" />
                <div className={styles.overlayButtons}>
                  <button className={styles.quickView}>Quick view</button>
                  <button className={styles.quickShop}>Quick Shop</button>
                </div>
              </div>
              <p>Combat Hoodie</p>
              <p>$28.00</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src="/images/jeans.png" alt="Blue Jean" />
                <div className={styles.overlayButtons}>
                  <button className={styles.quickView}>Quick view</button>
                  <button className={styles.quickShop}>Quick Shop</button>
                </div>
              </div>
              <p>Blue Jean</p>
              <p>$25.00</p>
            </div>
          </div>
        )}
      </div>
    </div>
        {/* Sorting Dropdown */}
        <select
          className={styles.sortDropdown}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
          <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
          <option value="Price, Low to High">Price, Low to High</option>
          <option value="Price, High to Low">Price, High to Low</option>
        </select>
      </div>
    </>
  );
};

export default ProductsPage;
