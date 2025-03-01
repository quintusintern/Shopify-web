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
      {/* Single Section Box */}
      <div className={styles.outerBox} onClick={() => setShowUI(true)}>
        <div className={`${styles.innerContainer} ${styles.oneSection}`}>
          <div className={styles.innerSection}></div>
        </div>
      </div>

      {/* Two Section Box */}
      <div className={styles.outerBox}>
        <div className={`${styles.innerContainer} ${styles.twoSection}`}>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
        </div>
      </div>
   {/* Static Product Grid (Visible on Click) */}
   {showUI && (
        <div className={styles.productGrid}>
          <div className={styles.product}>
            <img src="/images/product1.jpg" alt="Short Sleeved Hoodie" />
            <p>Short Sleeved Hoodie</p>
            <span className={styles.oldPrice}>$45.00</span> <span className={styles.newPrice}>$30.00</span>
          </div>
          <div className={styles.product}>
            <img src="/images/product2.jpg" alt="Striped Long Sleeve Top" />
            <p>Striped Long Sleeve Top</p>
            <span className={styles.oldPrice}>$45.00</span> <span className={styles.newPrice}>$20.00</span>
          </div>
          <div className={styles.product}>
            <img src="/images/product3.jpg" alt="C'est La Vie T-Shirt" />
            <p>C'est La Vie T-Shirt</p>
            <span className={styles.oldPrice}>$40.00</span> <span className={styles.newPrice}>$25.00</span>
          </div>
          <div className={styles.product}>
            <img src="/images/product4.jpg" alt="Soft Sweatpants" />
            <p>Soft Sweatpants</p>
            <span className={styles.oldPrice}>$50.00</span> <span className={styles.newPrice}>$35.00</span>
          </div>
        </div>
      )}
      
      

      {/* Three Section Box */}
      <div className={styles.outerBox}>
        <div className={`${styles.innerContainer} ${styles.threeSection}`}>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
        </div>
      </div>

      {/* Four Section Box */}
      <div className={styles.outerBox}>
        <div className={`${styles.innerContainer} ${styles.fourSection}`}>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
          <div className={styles.innerSection}></div>
        </div>
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
