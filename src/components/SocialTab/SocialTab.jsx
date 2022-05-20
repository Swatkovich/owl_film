import React from 'react';

import styles from './SocialTab.module.css';
import './SocialTab.module.css'
import qr from '../../img/qr_code.png'

import { useState } from 'react'

const SocialTab = () => {
  const [showQR, setShowQR] = useState(null);
  const [showEmail, setShowEmail] = useState(null);

  const handleClickInst = () => {
    setShowQR(<img className={styles.qr_img} src={qr} alt='qr-code'></img>)
  }

  const handleClickEmail = () => {
    setShowEmail('swatkovich@yandex.ru')
  }

  return (
    <>
    <ul className={styles.socialList}>
        <li>
          <div className={styles.svg_div} onClick={handleClickInst}>
            <svg className={styles.inst_svg}
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                fill="#e9e9e9"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="#e9e9e9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                fill="#e9e9e9"
              />
            </svg>
          </div>
        </li>
        <li>
          <div className={styles.svg_div} onClick={handleClickEmail}>
            <svg className={styles.email_svg}
            data-name="Layer 2" 
            id="ee13b174-13f0-43ea-b921-f168b1054f8d" 
            viewBox="0 0 35 35" 
            xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.384,30.381H5.615A5.372,5.372,0,0,1,.25,25.015V9.984A5.371,5.371,0,0,1,5.615,4.619H29.384A5.372,5.372,0,0,1,34.75,9.984V25.015A5.372,5.372,0,0,1,29.384,30.381ZM5.615,7.119A2.868,2.868,0,0,0,2.75,9.984V25.015a2.868,2.868,0,0,0,2.865,2.866H29.384a2.869,2.869,0,0,0,2.866-2.866V9.984a2.869,2.869,0,0,0-2.866-2.865Z"
                fill="#e9e9e9"
              />
              <path
              d="M17.486,20.865a4.664,4.664,0,0,1-2.9-.975L1.218,9.237A1.25,1.25,0,1,1,2.777,7.282L16.141,17.935a2.325,2.325,0,0,0,2.7-.007L32.04,7.287a1.249,1.249,0,1,1,1.569,1.945L20.414,19.873A4.675,4.675,0,0,1,17.486,20.865Z"
              fill="#e9e9e9"
              />
            </svg>
          </div>
        </li>
      </ul>
      { showQR &&
        <div className={styles.modal_window}>
          {showQR}
          <button className={styles.modal_button} onClick={() => setShowQR(null)}>ОК</button>
        </div>
      }
      { showEmail &&
        <div className={styles.modal_window_email}>
          {showEmail}
          <button className={styles.modal_button_email} onClick={() => setShowEmail(null)}>ОК</button>
        </div>
      }
      </>
  )
};

export default SocialTab;
