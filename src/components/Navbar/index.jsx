"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState(""); // State for input value
  const [isFocused, setIsFocused] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  const handleUserClick = () => {
    setShowLogin(true);
  };

  

  // Function to set input value when clicking on a suggestion
  const handleSuggestionClick = (value) => {
    setSearchValue(value);  // Set the input value
    setIsFocused(false);    // Hide suggestions after selection
  };

  return (
    <>
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
            <Link href="#">Demo</Link>
          </li>
          <li>
            <Link href="#">
              Shop <span className={styles.newBadge}>New</span>
            </Link>
          </li>
          <li>
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="#">
              Sale <span className={styles.saleBadge}>Sale</span>
            </Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Lookbook</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Buy Theme</Link>
          </li>
        </ul>
        <div className={styles.icons}>
          <div onClick={() => setShowSearch(true)}>
            <Search className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div onClick={handleUserClick}>
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
          <div
            className={styles.cartContainer}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
        </div>
      </div>

      <div className={`${styles.cartPopup} ${showLogin ? styles.open : ""}`}>
      <div className={styles.loginHeader}>
       <span className={styles.loginTitle}>Login</span>
       <X className={styles.logincloseIcon} onClick={() => setCartOpen(false)} />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.loginSidebar}>
          <div className={styles.inputContainer}>
          <input type="email" placeholder=" " required className={styles.inputEmail}/>
          <label>Email <span className={styles.required}>*</span></label>
          </div>
          <div className={styles.inputContainer}>
          <input type="email" placeholder=" " required className={styles.inputEmail}/>
          <label>Password <span className={styles.required}>*</span></label>
          </div>
          <a href=""className={styles.forgotPassword}>Forgot your password?</a>
          <div className={styles.signInButton}>
          <button className={styles.button}>Sign In</button>
          <a className={styles.customer}>New customer?Create your account</a>
          </div>
        </div>

      <div>

      </div>
      </div>

       
      </div>

<div className={`${styles.cartPopup} ${showSearch ? styles.open : ""}`}>
<div className={styles.SearchHeader}>
  <span className={styles.SearchHeading}>Search our site</span>
  <X className={styles.SearchcloseIcon} onClick={() => setCartOpen(false)} />
    </div>
    <hr className={styles.SearchDivider} />
  <div className={styles.Search}>
  
   <input type="text" placeholder="Search" className={styles.SearchInput}   value={searchValue}    onChange={(e) => setSearchValue(e.target.value)}  onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 200)}/>
   <FiSearch className={styles.SearchIcon} />
  </div> 
  <div className={styles.MiniSearch}>
   <span>Quick Search:</span>
   <ul className={styles.Searchkey}>
    <li className={styles.Searchlist}>
      <a onClick={() => handleSuggestionClick("Women")}>Women</a>
    </li>
    <li onClick={() => handleSuggestionClick("Men")}>Men,</li>
    <li onClick={() => handleSuggestionClick("New")}>New</li>
   </ul>
  </div>
   
          
 </div>

      {cartOpen && <div className={styles.overlay} onClick={() => setShowSearch(false)} />}

      <div className={`${styles.cartPopup} ${cartOpen ? styles.open : ""}`}>
        <div className={styles.cartHeader}>
          <h3>SHOPPING CART</h3>
          <X className={styles.closeIcon} onClick={() => setCartOpen(false)} />
        </div>

        <div className={styles.card}>
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

        <div className={styles.emptyCartContainer}>
          <FaShoppingCart className={styles.cartIcon} />
          <p className={styles.emptyText}>Your cart is empty.</p>
          <button className={styles.returnButton}>RETURN TO SHOP</button>
        </div>
      </div>

      {/* Overlay (Click to Close) */}
      {cartOpen && (
        <div className={styles.overlay} onClick={() => setCartOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
