"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";

const Navbar = () => {
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

  // To track any popup
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
      price: "$30.00",
      image: "/Resin Strap.jpg",
    },
    {
      id: 2,
      name: "Ridley High Waist",
      price: "$36.00",
      image: "/images/product2.jpg",
    },
  ];

  // Toggle popups
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
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="/">
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
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBar}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          <button className={styles.SearchBtn}>
            <FiSearch />
          </button>

          <div>
            <span className={styles.quickSearch}>Quick Search:</span>
            <ul className={styles.Searchlist}>
              <li>
                <a onClick={() => handleSuggestionClick("Women")}>Women</a>
              </li>
              <li onClick={() => handleSuggestionClick("Men")}>Men,</li>
              <li onClick={() => handleSuggestionClick("New")}>New</li>
            </ul>
          </div>
        </div>

        <div className={styles.minisearchTitle}>Need some inspiration</div>
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
                className={`${styles.label} ${
                  isEmailFocused || email ? styles.shrink : ""
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
                className={`${styles.label} ${
                  isPasswordFocused || password ? styles.shrink : ""
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
        <div
          className={styles.overlay}
          onClick={() => setShowPopup(false)} // Close any open popup
        />
      )}

      <div className={`${styles.cartPopup} ${cartOpen ? styles.open : ""}`}>
        <div className={styles.cartHeader}>
          <h3>SHOPPING CART</h3>
          <X className={styles.closeIcon} onClick={toggleCartPopup} />
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
          <svg
            id="icon-cart-emty"
            width="50"
            height="50"
            fill="rgb(135, 135, 135)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path>
          </svg>
          <p className={styles.emptyText}>Your cart is empty.</p>
          <button className={styles.returnButton}>RETURN TO SHOP</button>
        </div>
      </div>

      {/* Overlay (Click to Close) */}
      {showPopup && (
        <div
          className={styles.overlay}
          onClick={() => setShowPopup(false)} // Close any open popup
        />
      )}
    </>
  );
};

export default Navbar;
