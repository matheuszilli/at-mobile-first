import React, { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.gridContainer}>
      <header className={styles.header}>
        Header
      </header>
      <nav className={`${styles.globalMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
        Global Menu
      </nav>
      <button className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
      </button>
      <aside className={styles.contextMenu}>Context Menu</aside>
      <main className={styles.mainContent}>Main Content</main>
      <aside className={styles.ads}>Ads</aside>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
