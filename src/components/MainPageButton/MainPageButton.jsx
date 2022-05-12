import React from 'react';

import styles from './MainPageButton.module.css';
import logo from '../componentsImage/logo.png'

const MainPageButton = () => {
  return (
    <img src={logo} alt="logo" className={styles.main_page_button}/>
  )
}

export default MainPageButton;
