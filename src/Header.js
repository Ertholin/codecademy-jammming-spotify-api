import React from "react";
import styles from "./Header.module.css"


const Header = () => {
    return (
      <header className={styles.header}>
        <h1>Ja<span className={styles.m_color}>mmm</span>ing</h1>
        <p>Enjoy your music Time with Spotify</p>
      </header>
    );
  };
  
  export default Header;