import React from 'react';

import styles from './NavButton.module.css';
import menu from '../componentsImage/menu.png'

const NavButton = () => {
  return ( 
    <a href="#nav">
      <img src={menu} alt="menu" className={styles.navIcon}/>
    </a>
  )
}

export default NavButton;
