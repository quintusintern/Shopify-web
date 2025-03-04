"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoClipboardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = ({ cartItems }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [value, setValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  const handleUserClick = () => {
    setShowLogin(true);
    setShowPopup(true); // Any popup open
  };

  // Function to set input value when clicking on a suggestion
  const handleSuggestionClick = (value) => {
    setSearchValue(value); // Set the input value
    setShowSearch(false); // Hide suggestions after selection
    setShowPopup(true); // Any popup open
  };

  const products = [
    {
      id: 1,
      name: "Analogue Resin Strap",
      price: "$ 30.00",
      image: "/Resin Strap.jpg",
    },
    {
      id: 2,
      name: "Ridley High Waist",
      price: "$36.00",
      image: "/Ridley01.jpg",
    },
    {
      id: 3,
      name: "Blush Beanie",
      price: "$15.00",
      image: "/Blush Beanie01.jpg",
    },
    {
      id: 4,
      name: "Cluse La Baheme Rose Gold",
      price: "$45.00",
      image: "/Gold01.jpg",
    },
    {
      id: 5,
      name: "Mercury Tee",
      price: "$68.00",
      image: "/Mercury01.jpg",
    },
  ];

  const cardsData = [
    { id: 1, title: "Card 1", content: "This is Card 1" },
    { id: 2, title: "Card 2", content: "This is Card 2" },
    { id: 3, title: "Card 3", content: "This is Card 3" },
    { id: 4, title: "Card 4", content: "This is Card 4" },
    { id: 5, title: "Card 5", content: "This is Card 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const toggleSearchPopup = () => {
    setShowSearch(!showSearch);
    setShowPopup(!showSearch); // Toggle the state for overlay
  };

  const toggleCartPopup = () => {
    setCartOpen(!cartOpen);
    setShowPopup(!cartOpen); // Toggle the state for overlay
  };

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
    setShowPopup(!showLogin); // Toggle the state for overlay
  };

  return (
    <>
      <Headertop />
      <Header />
      <div className={styles.navbar}>
        <Image
          src="/Kalles.webp"
          alt="Women"
          width={95}
          height={29}
          className={styles.logoImg}
        />
        <ul className={styles.menu}>
          <li>
            <Link href="/">Demo</Link>
          </li>
          <li>
            <Link href="/">
              Shop <span className={styles.newBadge}>New</span>
            </Link>
          </li>
          <li>
            <Link href="/Product">Product</Link>
          </li>
          <li>
            <Link href="/Check">
              Sale <span className={styles.saleBadge}>Sale</span>
            </Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Lookbook</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Buy Theme</Link>
          </li>
        </ul>
        <div className={styles.icons}>
          <div onClick={toggleSearchPopup}>
            <Search className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div onClick={toggleLoginPopup}>
            <User className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div className={styles.heartContainer}>
            <Link href="/User">
              <div className={styles.heartContainer}>
                <Heart className={`${styles.icon} ${styles.iconHover}`} />
                <span className={styles.heartBadge}>0</span>
              </div>
            </Link>
          </div>
          <div className={styles.cartContainer} onClick={toggleCartPopup}>
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
        </div>
      </div>

      <div className={`${styles.cartPopup} ${showSearch ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span className={styles.theTitle}>Search our site</span>
          <X className={styles.closeIcon} onClick={toggleSearchPopup} />
        </div>
        <hr className={styles.SearchDivider} />
        <div className={styles.sidebarContainer}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchBar}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <button className={styles.searchButton}>
              <FiSearch className={styles.searchIcon} />
            </button>
          </div>

          <div className={styles.searchlistContainer}>
            <span className={styles.quickSearch}>Quick Search:</span>
            <ul className={styles.Searchlist}>
              <li onClick={() => handleSuggestionClick("Women")}>Women,</li>
              <li onClick={() => handleSuggestionClick("Men")}>Men,</li>
              <li onClick={() => handleSuggestionClick("New")}>New</li>
            </ul>
          </div>
        </div>

        <div className={styles.inspiration}>Need some inspiration</div>
        <div className={styles.productList}>
          <div className={styles.scrollContainer}>
            {products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/products">View All →</Link>
          </div>
        </div>
      </div>

      <div className={`${styles.cartPopup} ${showLogin ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span className={styles.theTitle}>Login</span>
          <X className={styles.closeIcon} onClick={toggleLoginPopup} />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.sidebarContainer}>
            {/* Email Input */}
            <div className={styles.inputContainer}>
              <label
                className={`${styles.label} ${isEmailFocused || email ? styles.shrink : ""
                  }`}
              >
                E-mail <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="email"
                className={styles.input}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(email !== "")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className={styles.inputContainer}>
              <label
                className={`${styles.label} ${isPasswordFocused || password ? styles.shrink : ""
                  }`}
              >
                Password <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="password"
                className={styles.input}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(password !== "")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot your password?
            </a>
            <div className={styles.signIn}>
              <button className={styles.signInButton}>Sign In</button>
              <a className={styles.customer}>
                New customer? Create your account
              </a>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)} />
      )}

      <div className={`${styles.cartPopup} ${cartOpen ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span>SHOPPING CART</span>
          <X className={styles.closeIcon} onClick={toggleCartPopup} />
        </div>

        <div className={styles.unlockCard}>
          <div className={styles.cartContent}>
            <p>
              Free Shipping for all orders over <span>$100.00</span>
            </p>
          </div>
          <div className={styles.progressContainer}>
            <FaShippingFast className={styles.truckIcon} />
            <div className={styles.progressBar}></div>
          </div>
        </div>

        <div>
          {cartItems && cartItems.length > 0 && (
            <div>
              <h3>Cart Items:</h3>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.title} - {item.selectedSize}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Shopping Items in cart */}
        {/* Default Item */}



        <div className={styles.shopFooter}>
          <div className={styles.subTotal}>
            <strong>Subtotal:</strong>
            <strong>$ 25.89</strong>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            I agree with the terms and conditions.
          </label>
          <Link
            href="/Check"
            className={styles.signInButton}
            disabled={!isChecked}
            style={{
              cursor: isChecked ? "pointer" : "not-allowed",
              opacity: isChecked ? 1 : 0.5,
            }}>CheckOut</Link>
          <img src={"/cartFooter.avif"} alt={"Antivirus Softwares"} />
        </div>
      </div>

      {/* Overlay (Click to Close) */}
      {showPopup && (
        <div className={styles.overlay} onClick={toggleCartPopup} />
      )}
    </>
  );
};

export default Navbar;
