import React from 'react';

import styles from './MainPageButton.module.css';
import logo from '../componentsImage/logo.png'

const MainPageButton = () => {
  return (
    <a href="w">
    <img src={logo} alt="logo" className={styles.main_page_button}/>
  </a>
  )
}

export default MainPageButton;
