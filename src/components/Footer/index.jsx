"use client";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <h2 className={styles.footerHeading}>kalles</h2>
            <p><FaMapMarkerAlt className={styles.icon} />184 Main Rd E, St Albans VIC 3021, Australia</p>
            <p><FaEnvelope className={styles.icon}/>contact@company.com</p>
            <p><FaPhone className={styles.icon}/>+001 2233 456</p>
            <div className={styles.SocialIcons}>
            <div className={styles.iconContainer}>
            <span className={styles.tooltip}>Follow on Facebook</span>
            <FaFacebookF className={styles.facebook} />
            </div>
            <div className={styles.iconContainer}>
            <span className={styles.tooltip}>Follow on Twitter</span>
            <FaTwitter className={styles.twitter} />
            </div>
            <div className={styles.iconContainer}>
            <span className={styles.tooltip}>Follow on Instagram</span>
            <FaInstagram className={styles.instagram} />
            </div>
            <div className={styles.iconContainer}>
            <span className={styles.tooltip}>Connect on LinkedIn</span>
            <FaLinkedinIn className={styles.linkedin} />
            </div>
            <div className={styles.iconContainer}>
        <span className={styles.tooltip}>Follow on Pinterest</span>
        <FaPinterestP className={styles.pinterest} />
      </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Categories</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Watch</li>
              <li>Dress</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Information</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Returns & Exchanges</li>
              <li>Shipping & Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Useful Links</h4>
            <ul>
              <li>Latest News</li>
              <li>My Account</li>
              <li>Size Guide</li>
              <li>FAQs</li>
              <li>FAQs 2</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Newsletter Signup</h4>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className={styles.paymentMethods}>
              <span>PayPal</span>
              <span>VISA</span>
              <span>American Express</span>
              <span>Skrill</span>
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p>All Rights Reserved © 2025 Kalles - Developed by The4</p>
          <div className={styles.footerLinks}>
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
      <div className={styles.scrollTop}>⬆</div>
    </footer>
  );
}
