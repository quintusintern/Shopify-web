'use client';

import Link from 'next/link';
import styles from './Product.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {/* Header Navigation */}
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.newArrival}><Link className={styles.navLink} href="#">New Arrival</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Decor</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Denim</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Dress</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Hats</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Men</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Sale</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Shoes</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} href="#">Women</Link></li>
        </ul>
      </nav>
     
     
      
    </div> 
  );
};

export default ProductsPage;
