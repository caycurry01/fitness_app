import React from 'react';
import styles from './Header.module.css';
import { FaCalendarAlt, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/goals" className={styles.icon} aria-label="Goals">
        <FaCalendarAlt size={27} />
      </a>
      <a href="/goals" className={styles.item}>Goals</a>
      <a href="/nutrition" className={styles.item}>Nutrition</a>
      <a href="/profile" className={styles.icon} aria-label="Profile">
        <FaUserCircle size={30} />
      </a>
    </header>
  );
}

export default Header;