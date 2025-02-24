"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";


const images = [
    
  "/assets/images/slider-01.jpg",
  "/assets/images/slider-01.jpg",
  "/assets/images/slider-01.jpg",
  "/assets/images/slider-01.jpg",
  "/assets/images/slider-01.jpg",
];
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const intervalRef = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDragStart = (e) => {
    const startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setDragStart(startX);
    stopAutoSlide();
  };

  const handleDragEnd = (e) => {
    const endX =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    if (dragStart !== null) {
      const diff = dragStart - endX;
      const threshold = 50;
      if (diff > threshold) {
        nextSlide();
      } else if (diff < -threshold) {
        prevSlide();
      }
    }
    setDragStart(null);
    startAutoSlide();
  };

  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <span className={styles.subheading}>SUMMER 2023</span>
        <h1 className={styles.heading}>New Arrival Collection</h1>
        <button className={styles.button}>Explore Now</button>
      </div>
      <div
        className={styles.imageContainer}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
