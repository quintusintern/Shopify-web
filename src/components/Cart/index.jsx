"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoClipboardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Cart.module.css";

export default function Cart() {
  const [isChecked, setIsChecked] = useState(false);
  //  cartItems
  const [cartItems, setCartItems] = useState([]);

  //  quantities
  const [quantities, setQuantities] = useState([]);

  // useEffect
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    setQuantities(storedCart.map(() => 1));
  }, []);

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    setQuantities(updatedQuantities);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Local storage update
  };
  // Increment quantity
  const handleIncrement = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  // Decrement quantity
  const handleDecrement = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );
  return (
    <>
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

      <div className={styles.container}>
        <div className={styles.cartSection}>
          <div className={styles.cartTitle}>
            <h2>My cart</h2>
            <div className={styles.cartItem}>
              <span>{cartItems.length} items</span>
            </div>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>₹{item.price * quantities[index]}</p>
                </div>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleIncrement(index)}>+</button>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className={styles.shopFooter}>
        <div className={styles.subTotal}>
          <strong>Subtotal:</strong>
          <strong>$ {totalPrice}</strong>
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
          }}
        >
          CheckOut
        </Link>
        <img src={"/cartFooter.avif"} alt={"Antivirus Softwares"} />
      </div>
    </>
  );
}
