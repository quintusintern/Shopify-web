"use client"; 

import React, { useState } from "react";
import styles from './Header.module.css'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
const Header = () => {
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); 
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <FaPhone className={styles.contacticon} /> <span className={styles.contact}>+01 23456789</span>
        <FaEnvelope className={styles.mailicon} /> <span className={styles.mail}>Kalles@domain.com</span>
      </div>
      <div className={styles.center}>
        Summer sale discount off <span className={styles.highlight}>50%!</span> 
        <a href="#" className={styles.shopNow}>Shop Now</a>
      </div>
      <div className={styles.right}>
        <FaMapMarkerAlt className={styles.icon} /> <span className={styles.location}>Location</span>
        <span className={styles.dropdown}>English&#9662;</span>
        <span className={styles.flag} onClick={toggleDropdown}>
          USD&#9662;
        </span>

        {/* Dropdown list for currencies */}
        {isDropdownOpen && (
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>Canada-CAD</li>
            <li className={styles.dropdownItem}>France-EUR</li>
            <li className={styles.dropdownItem}>Germany-EUR</li>
            <li className={styles.dropdownItem}>Japan-JPY</li>
            <li className={styles.dropdownItem}>New zealand</li>
            <li className={styles.dropdownItem}>United kingdom</li> 
            <li className={styles.dropdownItem}>United states</li>
            <li className={styles.dropdownItem}>Vietnam-VND</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
