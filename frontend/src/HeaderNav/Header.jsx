import React from 'react';
import styles from './Header.module.css';
import { FaCalendarAlt, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className={styles.header}> 
      <div className={styles.icon}> 
        <FaCalendarAlt size={27} />
      </div>
      <div className={styles.item}>Goals</div>
      <div className={styles.item}>Nutrition</div>
      <div className={styles.icon}>
        <FaUserCircle size={30} />
      </div>
    </header>
  );
}

export default Header;