import React from 'react';
import ToFormButton from '../ToFormButton/ToFormButton';

import styles from './BodyTab.module.css';
import welcomingImage from '../componentsImage/3.2.png'
import firstImage from '../componentsImage/4.2.png'
import secondImage from '../componentsImage/10.2.png'
import thirdImage from '../componentsImage/7.2.png'

const BodyTab = (props) => {
  const toView = (props.view ? "body" : "bodyNone");
  return (
    <div className={toView}>
      <div className={styles.bodyUnit}>
        <img className={styles.img} src={welcomingImage} alt='portret'></img>
        <div className={styles.formJump}>
          <p className={styles.formJumpText}>Никогда не поздно приобщиться к культуре аналоговой фотографии</p>
          <ToFormButton />
        </div>
      </div>
      <div className={styles.bodyUnit}>
        <div><img className={styles.img} src={firstImage} alt='portret'></img></div>
        <div className={styles.bodyUnitText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      <div className={styles.bodyUnit}>
        <div className={styles.bodyUnitText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div><img className={styles.img} src={secondImage} alt='portret'></img></div>
      </div>
      <div className={styles.bodyUnit}>
        <div><img className={styles.img} src={thirdImage} alt='portret'></img></div>
        <div className={styles.bodyUnitText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  )
}

export default BodyTab;
