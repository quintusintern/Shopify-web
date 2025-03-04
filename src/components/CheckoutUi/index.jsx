"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import styles from "./Continue.module.css";


export default function CheckoutUI() {
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
                            <div>
                                <h3>{item.title}</h3>
                                <p>₹{item.price * quantities[index]}</p>
                            </div>
                            {/* Remove Button - Right Side Upar */}
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemoveItem(index)}
                            >
                                Remove
                            </button>
                            <div className={styles.quantityControl}>
                                <button onClick={() => handleDecrement(index)}>-</button>
                                <span>{quantities[index]}</span>
                                <button onClick={() => handleIncrement(index)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}

                {/* Total Price */}
                <div className={styles.totalPrice}>
                    <h3>Total: ₹{totalPrice}</h3>
                </div>
            </div>
            <div className={styles.summarySection}>
                <div className={styles.coupons}>
                    <h4>Coupons and offers</h4>
                    <p>Save more with coupon and offers</p>
                </div>
                <div className={styles.orderSummary}>
                    <h4>Order Summary</h4>
                    <p>Items total: ₹{totalPrice}</p>
                    <p>Delivery fee: <span>Free</span></p>
                    <h4>Total cost: ₹{totalPrice}/-</h4>
                    <Link href="/Form">
                        <button
                            className={styles.continueBtn}
                            onClick={() => {
                                // Save cart and quantities to local storage for the checkout page
                                localStorage.setItem("selectedCart", JSON.stringify(cartItems));
                                localStorage.setItem("selectedQuantities", JSON.stringify(quantities));
                            }}
                        >
                            Continue
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}
