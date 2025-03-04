"use client";
import { useState } from "react";
import styles from "./Payment.module.css";

export default function Payment() {
    const [quantities, setQuantities] = useState([1, 1]);
    const [selectedPayment, setSelectedPayment] = useState("cod");

    const handleQuantityChange = (index, change) => {
        setQuantities((prev) => {
            const updated = [...prev];
            updated[index] = Math.max(1, updated[index] + change);
            return updated;
        });
    };

    const prices = [1320, 1155];
    const total = quantities.reduce((sum, qty, idx) => sum + qty * prices[idx], 0);

    return (
        <div className={styles.container}>
            <div className={styles.cartSection}>
                <h2>Choose payment mode</h2>
                <div className={styles.paymentOptions}>
                    <div
                        className={`${styles.paymentOption} ${selectedPayment === "cod" ? styles.selected : ""}`}
                        onClick={() => setSelectedPayment("cod")}
                    >
                        <span>🖥️</span>
                        <p>Cash on delivery</p>
                    </div>
                    <div
                        className={`${styles.paymentOption} ${selectedPayment === "qr" ? styles.selected : ""}`}
                        onClick={() => setSelectedPayment("qr")}
                    >
                        <span>📷</span>
                        <p>QR Payment</p>
                    </div>
                </div>

                <h3>Pay on delivery</h3>
                <p>Pay in cash or pay in person at the time of delivery</p>
                <button className={styles.placeOrderBtn}>Place Order</button>
            </div>

            <div className={styles.summarySection}>
                <div className={styles.coupons}>
                    <h4>Coupons and offers</h4>
                    <p>Save more with coupon and offers</p>
                </div>
                <div className={styles.orderSummary}>
                    <h4>Order Summary</h4>
                    <p>Items: {quantities.reduce((sum, qty) => sum + qty, 0)}</p>
                    <p>Items total: ₹{total}</p>
                    <p>Delivery fee: <span>Free</span></p>
                    <h4>Total cost: ₹{total}/-</h4>
                    <button className={styles.continueBtn}>Continue</button>
                </div>
            </div>
        </div>
    );
}
