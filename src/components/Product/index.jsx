"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";
import styles from "./Product.module.css";

const categories = [
  "New Arrival",
  "Decor",
  "Denim",
  "Dress",
  "Hats",
  "Men",
  "Sale",
  "Shoes",
  "Women",
];

const initialCards = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    defaultImage: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    category: "Shoes",
  },
  {
    title: "Ridley High Waist",
    price: "36.00",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    category: "Denim",
  },
  {
    title: "Blush Beanie",
    price: "15.00",
    defaultImage: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
  },
  {
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    defaultImage: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "One Size",
    category: "Women",
  },
  {
    title: "Mercury Tee",
    price: "68.00",
    defaultImage: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Men",
  },
  {
    title: "La Baheme Rose Gold",
    price: "40.00",
    defaultImage: "/RoseGold01.jpg",
    hoverImage: "/RoseGold02.jpg",
    sizes: "XS, S, M, L",
    category: "Sale",
  },
  {
    title: "Cream women pants",
    price: "35.00",
    defaultImage: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Women",
  },
  {
    title: "Black mountain hat",
    price: "35.00",
    defaultImage: "/hat01.jpg",
    hoverImage: "/hat02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New Arrival");
  const [selectedOption, setSelectedOption] = useState("Alphabetically, A-Z");
  const [activeLayout, setActiveLayout] = useState("list");
  const [showUI, setShowUI] = useState(false); // Modal State
  const [cards, setCards] = useState(initialCards);
 

  const filteredCards = useMemo(() => {
    let filtered = [...initialCards];
    if (selectedCategory !== "All") {
      filtered = filtered.filter((card) => card.category === selectedCategory);
    }

   

 

    switch (selectedOption) {
      case "Alphabetically, A-Z":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "Alphabetically, Z-A":
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      case "Price, Low to High":
        return filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case "Price, High to Low":
        return filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      default:
        return filtered;
    }
  }, [selectedCategory, selectedOption]);


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
          <img src={"/Newarrival.jpg"} alt={selectedCategory} />
        </div>
        <div className={styles.overlay}>
          <h3>{selectedCategory}</h3>
          <p>{`Home > ${selectedCategory}`}</p>
        </div>
      </div>



      {/* Filter & Customise Section */}
      <div className={styles.filterContainer}>
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
=======
          {/* Vertical stacks resize Button */}
          <button className={styles.rearrangeBtn}>
            <div className={styles.innerContainerVer}>
              <div className={styles.innerSectionVer}></div>
              <div className={styles.innerSectionVer}></div>
              <div className={styles.innerSectionVer}></div>
            </div>
          </button>

          {/* Two Section resize Button  */}
          <button className={styles.rearrangeBtn}>
            <div className={styles.innerContainer}>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
            </div>
          </button>

          {/* Three Section resize Button  */}
          <button className={styles.rearrangeBtn}>
            <div className={styles.innerContainer}>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
            </div>
          </button>

          {/* Four Section resize Button  */}
          <button className={styles.rearrangeBtn}>
            <div className={styles.innerContainer}>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
            </div>
          </button>

          {/* Five Section resize Button  */}
          <button className={styles.rearrangeBtn}>
            <div className={styles.innerContainer}>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
              <div className={styles.innerSection}></div>
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
                    <button className={styles.btn} onClick={openModal}>Quick View</button>
                    <button className={styles.lightBlueBtn}>Quick Shop</button>
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

    </>
  );
};

export default ProductsPage;
