'use client';

import Link from 'next/link';
import styles from './Product.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {/* Header Navigation */}
      <nav className={styles.navbar}>
        <ul>
          <li><Link href="#">New Arrival</Link></li>
          <li><Link href="#">Decor</Link></li>
          <li><Link href="#">Denim</Link></li>
          <li><Link href="#">Dress</Link></li>
          <li><Link href="#">Hats</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Sale</Link></li>
          <li><Link href="#">Shoes</Link></li>
          <li><Link href="#">Women</Link></li>
        </ul>
      </nav>

     
     
    </div>
  );
};

export default ProductsPage;
