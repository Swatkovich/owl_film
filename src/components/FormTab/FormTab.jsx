// import { Response } from 'express';
import React, { useState, useEffect, useCallback } from 'react';

import styles from './FormTab.module.css';

const FormTab = (props) => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    console.log(surname, name, email, object, message);
    e.preventDefault()
    fetch('http://localhost:3001/api/Form' , {
      method: 'POST',
      body: JSON.stringify({ surname: surname, name: name, email: email, object: object, message: message }),
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': true 
                },
    })
        .then(response => response.json())
        .then(data => (data.id));
    setSurname('');
    setName('');
    setEmail('');
    setObject('');
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.formName}>Оставить заявку</p>
      <div className={styles.textStar}>
        <p>Обязательные поля</p>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <input 
          type="text" 
          name="Surname" 
          value={surname} 
          onChange={(e) => setSurname(e.target.value)} 
          placeholder="Фамилия" 
          required
          autoComplete='off'
        />
        <p className={styles.star}>*</p>
        <input 
          type="text" 
          name="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Имя"
          autoComplete='off'
        />
      </div>
      <div className={styles.textStar}>
        <input 
          className={styles.inputWrapper} 
          type="email" 
          name="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Электронная почта" 
          required
          autoComplete='off'
        />
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
          <select 
            type="text" 
            name="Object" 
            value={object} 
            onChange={(e) => setObject(e.target.value)} 
            placeholder="Object" 
            required
          >
            <option value="">Форма фотосессии</option>
            <option value="Marige/ Event">Свадьба / Мероприятие</option>
            <option value="Couple Session">Парная фотосессия</option>
            <option value="Solo Session">Одиночная фотосессия</option>
            <option value="Another">Другое</option>
          </select>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <textarea 
          name="Message" 
          cols="10" 
          rows="7" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Сообщение" 
          required
        ></textarea>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.textStar}>
        <p className='Agreement'>Согласие с обработкой персональных данных</p>
        <p className={styles.star}>*</p>
      </div>
      <div className={styles.check_box_div}>
        <input type="checkbox" id="check" className= {styles.styled_check_box} required/> 
        <label htmlFor="check">Я согласен отправить мою информацию <span className={styles.font_change}>Owl Film</span></label>
      </div>
     
        <input type="submit" name = "Submit" value="Отправить"/>
      
  </form>
  )
}

export default FormTab;
