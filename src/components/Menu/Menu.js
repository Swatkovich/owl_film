import React from 'react';

import styles from './Menu.module.css';

const Menu = (props) => {
  const toView = (props.view ? "menuNone" : "menu");

  return (
    <div className={toView}>
      <p className={styles.menu_option}>На главную</p>
      <p className={styles.menu_option}>Галлерея</p>
      <p className={styles.menu_option}>Зарегестрироваться</p>
      <p className={styles.menu_option}>Войти</p>
    </div>
  )
};

export default Menu;
