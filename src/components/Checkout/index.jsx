import styles from './Checkout.module.css';
import { FaShippingFast, FaStore } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
const Checkout = () => {

    const products = [
        {
            id: 1,
            name: "3D Attractive Pot",
            price: 90.0,
            quantity: 1,
            image: "/accesories.jpg",
        },
        {
            id: 2,
            name: "Cluse La Boheme Rose Gold",
            price: 45.0,
            quantity: 1,
            image: "/Gold01.jpg",
            details: "Green / XS",
        },
        {
            id: 3,
            name: "Men pants",
            price: 56.0,
            quantity: 1,
            image: "/Gold02.jpg",
            details: "Blue",
        },
    ];

    const subtotal = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <>   <div className={styles.Main}>
            <div className={styles.leftSection}>
                <div className={styles.container}>
                    <div className={styles.contactHeader}>
                        <h2 className={styles.title}>Contact</h2>
                        <a href="#" className={styles.loginLink}>Log in</a>
                    </div>
                    <input type="text" placeholder="Email or mobile phone number" className={styles.input} />
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Email me with news and offers
                    </label>

                    <h2 className={styles.title}>Delivery</h2>
                    <div className={styles.deliveryOptions}>
                        <div className={`${styles.deliveryOption} ${styles.selected}`}>
                            <label className={styles.radioOption}>
                                <input type="radio" name="delivery" defaultChecked />
                                Ship
                            </label>
                            <FaShippingFast className={styles.icon} />
                        </div>
                        <div className={styles.deliveryOption}>
                            <label className={styles.radioOption}>
                                <input type="radio" name="delivery" />
                                Pickup in store
                            </label>
                            <FaStore className={styles.icon} />
                        </div>
                    </div>

                    <select className={styles.select}>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Germany</option>
                    </select>

                    <div className={styles.grid}>
                        <input type="text" placeholder="First name (optional)" className={styles.input} />
                        <input type="text" placeholder="Last name" className={styles.input} />
                    </div>

                    <input type="text" placeholder="Address" className={styles.input} />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.input} />

                    <div className={styles.addressSection}>
                        <div className={styles.inputRow}>
                            <input type="text" placeholder="City" className={styles.input} />
                            <select className={styles.input}>
                                <option>State</option>
                            </select>
                            <input type="text" placeholder="ZIP code" className={styles.input} />
                        </div>
                        <div className={styles.checkboxRow}>
                            <input type="checkbox" className={styles.checkbox} />
                            <label>Save this information for next time</label>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Shipping method</h3>
                        <div className={styles.infoBox}>
                            Enter your shipping address to view available shipping methods.
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Payment</h3>
                        <p className={styles.secureText}>All transactions are secure and encrypted.</p>
                        <div className={styles.paymentBox}>
                            <div className={styles.paymentError}>
                                <span className={styles.paymentIcon}>💳</span>
                                <p>This store can't accept payments right now.</p>
                            </div>
                        </div>
                    </div>

                    <button className={styles.payNowButton} disabled>Pay now</button>

                    <div className={styles.footerLinks}>
                        <a href="#">Refund policy</a> |
                        <a href="#">Privacy policy</a> |
                        <a href="#">Terms of service</a> |
                        <a href="#">Contact information</a>
                    </div>
                </div>

            </div>
            <div className={styles.rightSection}>
                {products.map((product) => (
                    <div key={product.id} className={styles.item}>
                        <img src={product.image} alt={product.name} className={styles.img} />
                        <div className={styles.info}>
                            <p className={styles.title}>{product.name}</p>
                            {product.details && <p className={styles.subTitle}>{product.details}</p>}
                        </div>
                        <p className={styles.cost}>${product.price.toFixed(2)}</p>
                    </div>
                ))}

                {/* Discount Code */}
                <div className={styles.discountBox}>
                    <input type="text" placeholder="Discount code" className={styles.codeInput} />
                    <button className={styles.applyBtn}>Apply</button>
                </div>

                {/* Summary */}
                <div className={styles.summaryBox}>
                    <div className={styles.row}>
                        <span>Subtotal · {products.length} items</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.row}>
                        <span>Shipping</span>
                        <span>Enter shipping address</span>
                    </div>
                    <div className={styles.totalBox}>
                        <span>Total</span>
                        <span>
                            <span className={styles.currency}>USD</span> ${subtotal.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

        </div>

            {/* Footer Links */}
            <div className={styles.links}>
                <a href="#">Refund policy</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms of service</a>
                <a href="#">Contact information</a>
            </div>
        </>

    );
};

export default Checkout;
