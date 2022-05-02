import React from 'react';

import styles from './SocialTab.module.css';

const SocialTab = () => {
  return (
    <ul className={styles.socialList}>
        <li>
          <a href="https://ru.wikipedia.org/wiki/Твиттер" target="_blank" rel="noreferrer">
            <span className={styles.iconTwitter}></span>
          </a>
        </li>
        <li>
          <a  href="https://ru.wikipedia.org/wiki/LinkedIn" target="_blank" rel="noreferrer">
            <span className={styles.iconLinkedin}></span>
          </a>
        </li>
        <li>
          <a href="https://ru.wikipedia.org/wiki/Электронная_почта" target="_blank" rel="noreferrer">
            <div className={styles.iconEmail}></div>
          </a>
        </li>
      </ul>
  )
};

export default SocialTab;
