import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
}

export default Header;
