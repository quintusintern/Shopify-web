"use client";

import Image from "next/image";
import styles from '@/app/page.module.css'; 

const categories = [
  { src: "/assets/category/women.jpg", label: "Women" },
  { src: "/assets/category/accessories.jpg", label: "Accessories" },
  { src: "/assets/category/footwear.jpg", label: "Footwear" },
  { src: "/assets/category/watches.jpg", label: "Watches" },
];

const CategoryGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              item.label === "Women" ? styles.womenCard : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={300}
              height={300}
            />
            <button className={styles.label}>{item.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
