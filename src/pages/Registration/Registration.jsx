import React, { useState } from 'react';

import styles from "./Registration.module.css"

export default function Registration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = e => {
    if (password === passwordConfirm) {
      e.preventDefault()
      fetch('http://localhost:3001/api/Registration' , {
        method: 'POST',
        body: JSON.stringify({"name":name, "surname": surname, "login": login, "email": email, "password": password, "role": "user", "messages": [{"avatar": "avatar1","message": "Здесь вы можете задать мне любые вопросы."}] }),
        headers: { 'Content-Type': 'application/json'},
      })
          .then((res) => {
            if (res.status === 409) {
                alert('Данный Логин уже существует и не доступен');
            }
          })
      setName('');
      setSurname('');
      setLogin('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
    }
    else {
      alert('Вы неправильно повторили пароль')
      setPassword('');
      setPasswordConfirm('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.reg_box}>
    <div className={styles.reg_data}>
    <p className={styles.reg_input_name}>Имя</p>
      <input 
        type="text" 
        name="Name"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Введите своё Имя" 
        required
      />
      <p className={styles.reg_input_name}>Фамилия</p>
      <input 
        type="text" 
        name="Surname"
        value={surname} 
        onChange={(e) => setSurname(e.target.value)} 
        placeholder="Введите свою Фамилию" 
        required
      />
      <p className={styles.reg_input_name}>Логин</p>
      <input 
        type="text" 
        name="Login"
        value={login} 
        onChange={(e) => setLogin(e.target.value)} 
        placeholder="Введите свой Логин" 
        required
      />
      <p className={styles.reg_input_name}>Электронная почта</p>
      <input 
        type="text" 
        name="Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}  
        placeholder="Введите свою электронную почту" 
        required
      />
      <p className={styles.reg_input_name}>Пароль</p>
      <input 
        type="text" 
        name="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}  
        placeholder="Введите свой пароль" 
        required
      />
      <p className={styles.reg_input_name}>Подтверждение пароля</p>
      <input 
        type="text" 
        name="PasswordConfirm" 
        value={passwordConfirm} 
        onChange={(e) => setPasswordConfirm(e.target.value)} 
        placeholder="Подтвердите свой пароль" 
        required
      />
    </div>
      <input type="submit" name = "Submit" value="Регистрация"/>
    </form>
  );
}
