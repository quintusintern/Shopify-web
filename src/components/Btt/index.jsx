import React, { useState, useEffect, useRef } from 'react';
import styles from './Btt.module.css';

const Btt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      setIsVisible(scrollTop > 100);

      const maxScroll = documentHeight - windowHeight;
      const percentage = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const squareStyle = {
    strokeDasharray: 160, // Total perimeter of the square (approx)
    strokeDashoffset: 160 - 160 * scrollPercentage,
    stroke: 'black',
    strokeWidth: 2,
    fill: 'transparent',
    transition: 'stroke-dashoffset 0.1s linear',
  };

  return (
    isVisible && (
      <div
        ref={containerRef}
        className={styles.bttContainerSquare}
        onClick={scrollToTop}
      >
        <svg width="49" height="49">
          <rect
            x="3.75"
            y="3.75"
            width="40.5"
            height="40.5"
            style={squareStyle}
          />
        </svg>
        <div className={styles.bttArrowContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round"><path d="M16.767 12.809l-0.754-0.754-6.035 6.035 0.754 0.754 5.281-5.281 5.256 5.256 0.754-0.754-3.013-3.013z" fill="currentColor"></path></svg>
        </div>
      </div>
    )
  );
};

export default Btt;