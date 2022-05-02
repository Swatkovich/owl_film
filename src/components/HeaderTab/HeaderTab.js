import React from 'react';
import MainPageButton from '../MainPageButton/MainPageButton';
import NavButton from '../NavButton/NavButton';

import styles from './HeaderTab.module.css';

const HeaderTab = () => {
  return (
    <div className={styles.header}>
      <MainPageButton />
      <NavButton/>
    </div>
  )
}

export default HeaderTab;
