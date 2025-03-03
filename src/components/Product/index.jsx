"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";
import styles from "./Product.module.css";
import QuickShopPopup from "@/components/QuickShopPopup";

const categories = [
  { id: 1, name: "New Arrival", heroImage: "heroImages/Newarrival.jpg" },
  { id: 2, name: "Decor", heroImage: "heroImages/Decor.jpg" },
  { id: 3, name: "Denim", heroImage: "heroImages/Denim.jpg" },
  { id: 4, name: "Dress", heroImage: "heroImages/Dress.jpg" },
  { id: 5, name: "Hats", heroImage: "heroImages/Hats.jpg" },
  { id: 6, name: "Men", heroImage: "heroImages/Men.jpg" },
  { id: 7, name: "Sale", heroImage: "heroImages/Sale.jpg" },
  { id: 8, name: "Shoes", heroImage: "heroImages/Shoes.jpg" },
  { id: 9, name: "Women", heroImage: "heroImages/Women.jpg" },
];

const initialCards = [
  {
    id: 1,
    title: "Analogue Resin Strap",
    price: "30.00",
    defaultImage: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    category: "Shoes",
  },
  {
    id: 2,
    title: "Ridley High Waist",
    price: "36.00",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    category: "Denim",
  },
  {
    id: 3,
    title: "Blush Beanie",
    price: "15.00",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
  },
  {
    id: 4,
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    defaultImage: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "One Size",
    category: "Women",
  },
  {
    id: 5,
    title: "Mercury Tee",
    price: "68.00",
    defaultImage: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Men",
  },
  {
    id: 6,
    title: "La Baheme Rose Gold",
    price: "40.00",
    defaultImage: "/RoseGold01.jpg",
    hoverImage: "/RoseGold02.jpg",
    sizes: "XS, S, M, L",
    category: "Sale",
  },
  {
    id: 7,
    title: "Cream women pants",
    price: "35.00",
    defaultImage: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Women",
  },
  {
    id: 8,
    title: "Black mountain hat",
    price: "35.00",
    defaultImage: "/hat01.jpg",
    hoverImage: "/hat02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
  },
];

const ProductsPage = ({ openPopup }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedOption, setSelectedOption] = useState("Alphabetically, A-Z");
  const [cards, setCards] = useState(initialCards);
  const [showUI, setShowUI] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const filteredCards = useMemo(() => {
    let filtered = [...initialCards];
    if (selectedCategory && selectedCategory.name !== "All") {
      filtered = filtered.filter(
        (card) => card.category === selectedCategory.name
      );
    }

    switch (selectedOption) {
      case "Alphabetically, A-Z":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "Alphabetically, Z-A":
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      case "Price, Low to High":
        return filtered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case "Price, High to Low":
        return filtered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      default:
        return filtered;
    }
  }, [selectedCategory, selectedOption]);

  const handleQuickShop = (card) => {
    setSelectedCard(card);
    setSelectedSize(card.sizes.split(", ")[0] || "");
  };

  const closePopup = () => {
    setSelectedCard(null);
    setSelectedSize("");
  };

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href="#" legacyBehavior>
                <a
                  className={
                    selectedCategory && selectedCategory.id === category.id
                      ? styles.active
                      : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className={styles.wishlistHero}>
        <div className={styles.imageContainer}>
          <img src={selectedCategory.heroImage} alt={selectedCategory.name} />
        </div>
        <div className={styles.overlay}>
          <h3>{selectedCategory.name}</h3>
          <p>{`Home > ${selectedCategory.name}`}</p>
        </div>
      </div>

      {/* Filter & Customise Section */}
      <div className={styles.filterContainer}>
        {/* resize cards container */}
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
              <div
                className={`${styles.innerContainer} ${styles.threeSection}`}
              >
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

        {/* Vertical stacks resize Button */}
        <button className={styles.rearrangeBtn}>
          <div className={styles.innerContainerVer}>
            <span className={styles.innerSectionVer}></span>
            <span className={styles.innerSectionVer}></span>
            <span className={styles.innerSectionVer}></span>
          </div>
        </button>

        {/* Two Section resize Button  */}
        <button className={styles.rearrangeBtn}>
          <div className={styles.innerContainer}>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
          </div>
        </button>

        {/* Three Section resize Button  */}
        <button className={styles.rearrangeBtn}>
          <div className={styles.innerContainer}>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
          </div>
        </button>

        {/* Four Section resize Button  */}
        <button className={styles.rearrangeBtn}>
          <div className={styles.innerContainer}>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
          </div>
        </button>

        {/* Five Section resize Button  */}
        <button className={styles.rearrangeBtn}>
          <div className={styles.innerContainer}>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
            <span className={styles.innerSection}></span>
          </div>
        </button>
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

      {/* Products Box */}
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.imgCard}>
            <div className={styles.imageWrapper}>
              <img
                src={card.defaultImage}
                alt={card.title}
                className={styles.imageDefault}
              />
              <img
                src={card.hoverImage}
                alt={`${card.title} hover`}
                className={styles.imageHover}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.topLeftButtons}>
                    <button className={`${styles.smallBtn} ${styles.btn1}`}>
                      <CiHeart className={styles.icon} />
                    </button>
                    <button className={`${styles.smallBtn} ${styles.btn2}`}>
                      <TbArrowsCross className={styles.icon} />
                    </button>
                  </div>

                  <div className={styles.centerButtons}>
                    <button
                      className={styles.btn}
                      onClick={() => handleQuickShop(card)}
                    >
                      Quick View
                    </button>
                    <button
                      className={styles.lightBlueBtn}
                      onClick={() => handleQuickShop(card)}
                    >
                      Quick Shop
                    </button>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardPrice}>{` $ ${card.price}`}</p>
            </div>
          </div>
        ))}
      </div>

      <QuickShopPopup
        isOpen={selectedCard !== null}
        onClose={closePopup}
        imageUrl={selectedCard?.defaultImage}
        title={selectedCard?.title}
        description={selectedCard?.description}
        sizes={selectedCard?.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </>
  );
};

export default ProductsPage;
