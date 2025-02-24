'use client';

import { useState } from 'react';
import { ShoppingCart, User, Heart, Search } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from '@/app/page.module.css'; 


export default function Navbar() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.contactInfo}>
          <span><Phone size={14} /> +01 23456789</span>
          <span><Mail size={13} /> Kalles@domain.com</span>
        </div>
        <div className={styles.announcement}>
          Summer sale discount off <span className={styles.discount}>50%</span>! 
          <Link href="#">Shop Now</Link>
        </div>
        <div className={styles.settings}>
          <span><MapPin size={14} /> Location</span>
          <span>English ▼</span>
          <span>🇺🇸 USD ▼</span>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.logo}>kalles</div>
        <ul className={styles.navLinks}>
          <li><Link href="#">Demo</Link></li>
          <li className={styles.relative}>
            <Link href="#" className={styles.relative}>Shop
              <span className={`${styles.badge} ${styles.new}`}>New</span>
            </Link>
          </li>
          <li><Link href="#">Product</Link></li>
          <li className={styles.relative}>
            <Link href="#" className={styles.relative}>Sale
              <span className={`${styles.badge} ${styles.sale}`}>Sale</span>
            </Link>
          </li>
          <li><Link href="#">Pages</Link></li>
          <li><Link href="#">Lookbook</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Buy Theme</Link></li>
        </ul>

        <div className={styles.icons}>
          <Search className={styles.icon} />
          <User className={styles.icon} />
          <div className={styles.heartContainer}>
            <Heart className={styles.icon}/>
            <span className={styles.heartCount}>0</span>
          </div>
          <div className={styles.cartContainer}>
            <ShoppingCart className={styles.icon} />
            <span className={styles.cartCount}>0</span>
          </div>
        </div>
      </nav>
    </>
  );
}
