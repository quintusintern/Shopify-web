"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import styles from "./Checkout.module.css";

const CheckoutForm = () => {
    const [orderItem, setOrderItem] = useState(null);
    // 1️⃣ Create state for cart items and quantities
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState([]);

    // 2️⃣ Load cart data from local storage when the component mounts
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("selectedCart")) || [];
        const storedQuantities = JSON.parse(localStorage.getItem("selectedQuantities")) || [];
        setCartItems(storedCart);
        setQuantities(storedQuantities);
    }, []);

    // 3️⃣ Calculate total items and total price dynamically
    const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
    const totalPrice = cartItems.reduce(
        (sum, item, index) => sum + item.price * quantities[index],
        0
    );

    // 4️⃣ Render the form and order summary
    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.detailsSection}>
                <h2>Your Details</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <div className={styles.row}>
                        <input type="text" placeholder="Mobile" className={styles.input} />
                        <input type="text" placeholder="Alternative Mobile (Optional)" className={styles.input} />
                    </div>
                    <input type="email" placeholder="Email (Optional)" className={styles.input} />
                    <input type="text" placeholder="Flat / House No, Building, Colony" className={styles.input} />
                    <div className={styles.row}>
                        <input type="text" placeholder="Locality / Area (Optional)" className={styles.input} />
                        <input type="text" placeholder="Landmark (Optional)" className={styles.input} />
                    </div>
                    <div className={styles.row}>
                        <input type="text" placeholder="Pin Code *" className={styles.input} />
                        <input type="text" placeholder="City *" className={styles.input} />
                    </div>
                    <input type="text" placeholder="State *" className={styles.input} />
                </form>
            </div>

            <div className={styles.summarySection}>
                <div className={styles.coupons}>
                    <h4>Coupons and offers</h4>
                    <p>Save more with coupon and offers</p>
                </div>
                <div className={styles.orderSummary}>
                    <h3>Order Summary</h3>
                    <div className={styles.summaryItem}><span>Items</span><span>{totalItems}</span></div>
                    <div className={styles.summaryItem}><span>Items total</span><span>₹{totalPrice}</span></div>
                    <div className={styles.summaryItem}><span>Delivery fee</span><span className={styles.free}>Free</span></div>
                    <div className={styles.totalCost}><span>Total cost</span><span>₹{totalPrice}/-</span></div>
                    <Link href="/Pay">
                        <button className={styles.continueButton}>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
