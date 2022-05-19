import styles from "./Main.module.css";
import ToFormButton from '../../components/ToFormButton/ToFormButton';
import { useAuth } from "../../AuthContext";
import Modal from "../../components/Modal/Modal";

import welcomingImage from '../../components/componentsImage/3.2.png'
import firstImage from '../../components/componentsImage/4.2.png'
import secondImage from '../../components/componentsImage/10.2.png'
import thirdImage from '../../components/componentsImage/7.2.png'

import {Link} from "react-router-dom";

function Main() {
  const {sucsessMessage, setSucsessMessage} = useAuth();

  return (
    <>
      <div className={styles.application2}>
      <div className={styles.body}>
      <div className={styles.bodyUnit}>
        <img className={styles.img} src={welcomingImage} alt='portret'></img>
        <div className={styles.formJump}>
          <p className={styles.formJumpText}>Никогда не поздно приобщиться к культуре аналоговой фотографии</p>
          <Link to="/Form"><ToFormButton /></Link>
        </div>
      </div>
      <div className={styles.bodyUnit}>
        <div><img className={styles.img} src={firstImage} alt='portret'></img></div>
        <div className={styles.bodyUnitText}>Плёночная фотография - это не просто отпечаток в истории ушедшей аналоговой эпохи. Это огромный пласт знаний, опыта, проб и ошибок. Яыление, которое существует уже более чем 200 лет. То явление, что оставивило свой след в массовой культуре. Инструмент, позволивший начать изучать наш с вами мир таким, каким он являлся.</div>
      </div>
      <div className={styles.bodyUnit}>
        <div className={styles.bodyUnitText}>Сейчас плёночная фотография - это инструмент, позволяющий нам почувствовать отголоски той эпохи. Предаться тёплым воспоминаниям дества и юнешества, или же впервые почувствовать, как хранили воспоминнаия воспоминания наши с вами старшие поколения. Сохранить фотографии не только в виде "единиц" и "нулей", но а так же в материальной форме: запечатлеть фотографии в той самой полупрозрачной ленте, которую любят рассматривать просвечивая через свет лампочки.</div>
        <div><img className={styles.img} src={secondImage} alt='portret'></img></div>
      </div>
      <div className={styles.bodyUnit}>
        <div><img className={styles.img} src={thirdImage} alt='portret'></img></div>
        <div className={styles.bodyUnitText}>Но все мы живём не в прошлом, а в современном мире. Новые идеи, новые масштабы, новые способоы реализации. Но ничто не мешает нам применить свои самые смелые идеи и на плёночную фотографию.</div>
      </div>
    </div>
      </div>
      { sucsessMessage && 
      <Modal>
        <div className={styles.modal_window}>
          {sucsessMessage}
          <button className={styles.modal_button} onClick={() => setSucsessMessage(null)}>ОК</button>
        </div>
      </Modal>
     }
      </>
  );
}

export default Main;
