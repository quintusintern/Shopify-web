import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Brand Info */}
        <div className={styles.footerBrand}>
          <h2 className={styles.brand}>kalles</h2>
          <p className={styles.address}>
            📍 184 Main Rd E, St Albans VIC 3021, Australia
          </p>
          <p className={styles.email}>✉️ contact@company.com</p>
          <p className={styles.phone}>📞 +001 2233 456</p>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className={styles.footerLinks}>
          <div>
            <h3>Categories</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Watch</li>
              <li>Dress</li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Terms & Conditions</li>
              <li>Returns & Exchanges</li>
              <li>Shipping & Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>Latest News</li>
              <li>My Account</li>
              <li>Size Guide</li>
              <li>FAQs</li>
              <li>FAQs 2</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className={styles.footerNewsletter}>
          <h3>Newsletter Signup</h3>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <div className={styles.newsletterBox}>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <div className={styles.paymentMethods}>
            <img src="/paypal.png" alt="PayPal" />
            <img src="/visa.png" alt="Visa" />
            <img src="/amex.png" alt="American Express" />
            <img src="/skrill.png" alt="Skrill" />
            <img src="/bank-transfer.png" alt="Bank Transfer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
