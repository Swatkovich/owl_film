import React from 'react';

import styles from './FormTab.module.css';

const FormTab = (props) => {
  return (
    <form method="POST" className={styles.toView}>
      <p className={styles.formName}>Оставить заявку</p>
      <div className={styles.textStar}>
        <p>Обязательные поля</p>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <input type="text" name="Surname" placeholder="Фамилия" required/>
        <p className={styles.star}>*</p>
        <input type="text" name="Name" placeholder="Имя"/>
      </div>
      <div className={styles.textStar}>
        <input className={styles.inputWrapper} type="email" name="Email" placeholder="Электронная почта" required/>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
          <select name="Object" placeholder="Object" required>
            <option value="">Форма фотосессии</option>
            <option value="Marige/ Event">Свадьба / Мероприятие</option>
            <option value="Couple Session">Парная фотосессия</option>
            <option value="Solo Session">Одиночная фотосессия</option>
            <option value="Another">Другое</option>
          </select>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <textarea name="Message" cols="10" rows="7" placeholder="Сообщение" required=""></textarea>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <p className='Agreement'>Согласие с обработкой персональных данных</p>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.check_box_div}>
        <input type="checkbox" id="check" className= {styles.styled_check_box} required/> 
        <label for="check">Я согласен отправить мою информацию <span className={styles.font_change}>Owl Film</span></label>
      </div>
      <div>
        <input type="submit" name = "Submit" value="Отправить"/>
      </div>
  </form>
  )
}

export default FormTab;
