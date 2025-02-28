
"use client";

import { useState } from "react";
import styles from './Headertop.module.css'
export default function Headertop() {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Today deal sale off 70%. End in · 
        <span 
          className={styles.hurryUp}
        >
          Hurry Up <span className={styles.arrow}> →</span>
        </span>
      </p>
      <button className={styles.close} onClick={() => setVisible(false)}><inline className={styles.cross}>× </inline> close</button>
    </div>
  );
}
