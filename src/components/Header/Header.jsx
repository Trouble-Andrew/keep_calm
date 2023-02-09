import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} container`}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <a href="tel:+7 (495) 495-49-54" className={styles.phoneLink}>
          +7 (495) 495-49-54
        </a>
      </div>
    </header>
  );
};

export default Header;
