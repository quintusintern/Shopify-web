"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const currencies = [
  { code: "CAD", country: "Canada", flag: "/flags/ca.jpg" },
  { code: "EUR", country: "France", flag: "/flags/fr.jpg" },
  { code: "EUR", country: "Germany", flag: "/flags/de.jpg" },
  { code: "JPY", country: "Japan", flag: "/flags/jp.jpg" },
  { code: "NZD", country: "New Zealand", flag: "/flags/nz.jpg" },
  { code: "GBP", country: "United Kingdom", flag: "/flags/gb.jpg" },
  { code: "USD", country: "United States", flag: "/flags/us.jpg" },
  { code: "VND", country: "Vietnam", flag: "/flags/vn.jpg" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "jp", name: "日本語" },
];

const Header = () => {
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    country: "United States",
    flag: "/us.jpg",
  });

  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
  });

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
    setIsCurrencyDropdownOpen(false);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <FaPhone className={styles.contacticon} />{" "}
        <span className={styles.contact}>+01 23456789</span>
        <FaEnvelope className={styles.mailicon} />{" "}
        <span className={styles.mail}>Kalles@domain.com</span>
      </div>
      <div className={styles.center}>
        Summer sale discount off <span className={styles.highlight}>50%!</span>
        <a href="#" className={styles.shopNow}>
          Shop Now
        </a>
      </div>
      <div className={styles.right}>
        <FaMapMarkerAlt className={styles.icon} />{" "}
        <span className={styles.location}>
        <Link href="/Location">Location</Link>
          </span>
        {/* Language Selector */}
        <span className={styles.language} onClick={toggleLanguageDropdown}>
          {selectedLanguage.name} &#9662;
        </span>
        {isLanguageDropdownOpen && (
          <ul className={styles.dropdownList}>
            {languages.map((language) => (
              <li
                key={language.code}
                className={styles.dropdownItem}
                onClick={() => selectLanguage(language)}
              >
                {language.name}
              </li>
            ))}
          </ul>
        )}
        {/* Currency Selector */}
        <span className={styles.currencySelect} onClick={toggleCurrencyDropdown}>
          <img
            height={12}
            width={16}
            src={selectedCurrency.flag}
            alt={selectedCurrency.country}
            style={{ marginTop: 10 }}
          />{" "}
          {selectedCurrency.code} &#9662;
        </span>
        {isCurrencyDropdownOpen && (
          <ul className={styles.dropdownList}>
            {currencies.map((currency) => (
              <li
                key={currency.code + currency.country}
                className={styles.dropdownItem}
                onClick={() => selectCurrency(currency)}
              >
                <img
                  height={16}
                  width={20}
                  src={currency.flag}
                  alt={currency.country}
                  className={styles.flag}
                />{" "}
                {currency.country} - {currency.code}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
