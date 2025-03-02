"use client";
import React, { useState } from "react";
import CategoryGrid from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import TwoCards from "@/components/TwoCards";
import BestSeller from "@/components/BestSeller";
import BlogSection from "@/components/BlogSection";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";
import QuickShopPopup from "@/components/QuickShopPopup";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
    setSelectedSize(null);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Function to pass cartItems to Navbar
  const getCartItemsForNavbar = () => {
    return cartItems;
  };

  return (
    <>
      <Navbar cartItems={getCartItemsForNavbar()} /> {/* Pass cartItems to Navbar */}
      <Hero />
      <CategoryGrid />
      <Trending openPopup={openPopup} />
      <TwoCards />
      <BestSeller openPopup={openPopup} />
      <BlogSection />
      <FollowUs />
      <Footer />
      {selectedProduct && (
        <QuickShopPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          imageUrl={selectedProduct.imageUrl}
          title={selectedProduct.title}
          description={selectedProduct.description}
          sizes={selectedProduct.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          addToCart={addToCart}
        />
      )}
    </>
  );
}