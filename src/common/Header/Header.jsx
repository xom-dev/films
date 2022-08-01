import React from 'react';
import { ReactComponent as WebbyLab } from './img/webbylab.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <WebbyLab className={styles.icon} />
    </header>
  );
};

export default Header;
