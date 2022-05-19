import styles from "./Gallery.module.css";

import IP400 from './img/IP400.png'
import Portra400 from './img/Portra400.jpg.png'
import Tmax3200 from './img/Tmax3200.png'

import proj1 from './img/1.png'
import proj2 from './img/2.png'
import proj3 from './img/3.png'
import proj4 from './img/4.png'
import proj5 from './img/5.png'
import proj6 from './img/6.png'
import proj7 from './img/7.png'
import proj8 from './img/8.png'
import proj9 from './img/9.png'

import sh1 from './img/sh1.jpg'
import sh2 from './img/sh2.jpg'
import sh3 from './img/sh3.jpg'

import sn1 from './img/sn1.jpg'
import sn2 from './img/sn2.jpg'

export default function Gallery() {
  return (
      <div className={styles.gallery_body}>


        <div className={styles.gallery_unit}>
          <div className={styles.info_left}>
            <img src={IP400} alt="Ilford Pan 400" className={styles.film_container}/>
            <div className={styles.description}>
              <p>Ilford Pan 400</p>
              <p>С135, ISO 400, Black and White, Negative</p>
              <p>ZenitET</p>
              <p>Гелиос 44-2</p>
            </div>
          </div>
          <div className={styles.project_photoes}>

            <div className={styles.project_row}>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj1} alt="1" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj2} alt="2" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj3} alt="3" />
              </div>
            </div>

            <div className={styles.project_row}>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj4} alt="4" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj5} alt="5" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj6} alt="6" />
              </div>
            </div>

            <div className={styles.project_row}>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj7} alt="7" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj8} alt="8" />
              </div>
              <div className={styles.project_row_element}>
                <img className={styles.project_img} src={proj9} alt="9" />
              </div>
            </div>

          </div>
        </div>


        <div className={styles.gallery_unit}>
          <div className={styles.info_left}>
            <img src={Portra400} alt="Portra400" className={styles.film_container}/>
            <div className={styles.description}>
              <p>Kodak Portra 400</p>
              <p>С135, ISO 400, Color, Negative</p>
              <p>Canon 300 EOS</p>
              <p>Tamron SP 70-200</p>
            </div>
            </div>
            <div className={styles.shaman_photoes}>
              <div className={styles.shaman_horizontal}>
                <img className={styles.sh1} src={sh1} alt="1" />
                <img className={styles.sh2} src={sh2} alt="2" />
              </div>
              <img className={styles.sh3} src={sh3} alt="3" />
              </div>
        </div>

        <div className={styles.gallery_unit}>
          <div className={styles.info_left}>
            <img src={Tmax3200} alt="Portra400" className={styles.film_container}/>
            <div className={styles.description}>
              <p>TMax 3200</p>
              <p>С135, ISO 800, Black and White, Negative</p>
              <p>Canon 300 EOS</p>
              <p>Tamron SP 70-200</p>
            </div>
            </div>
            <div className={styles.snur_photoes}>
              <img className={styles.sn1} src={sn1} alt="1" />
              <img className={styles.sn2} src={sn2} alt="2" />
              </div>
          </div>
      </div>
  );
}
