import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { useAuth } from '../../AuthContext';

import styles from "./Registration.module.css"

export default function Registration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const {setSucsessMessage} = useAuth();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Main";
    navigate(path)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch('http://localhost:3001/api/Registration' , {
        method: 'POST',
        body: JSON.stringify({"name":name, "surname": surname, "login": login, "email": email, "password": password, "role": "user", "avatar": "avatar1", "messages": [{"avatar": "avatar2","message": "Здесь вы можете задать мне любые вопросы."}] }),
        headers: { 'Content-Type': 'application/json'},
      })
          .then((res) => {
            if (password !== passwordConfirm) {
              setPasswordError('Введённые вами пароли не совпадают')
              setPassword('');
              setPasswordConfirm('');
            }
            else if (res.status === 409) {
                setLoginError('Данный Логин уже существует и не доступен')
                setLogin('');
            }
            else if (res.status === 451){
              setEmailError('Данная электронная почта уже используется')
              setEmail('');
            }
            else {
              setSucsessMessage('Вы успешно авторизировались')
              routeChange();
            }
            })
    }

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.reg_box}>
    <div className={styles.reg_data}>
    {/* <p className={styles.reg_input_name}>Имя</p> */}
      <input 
        type="text" 
        name="regName"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Введите своё Имя" 
        required
      />
      {/* <p className={styles.reg_input_name}>Фамилия</p> */}
      <input 
        type="text" 
        name="regSurname"
        value={surname} 
        onChange={(e) => setSurname(e.target.value)} 
        placeholder="Введите свою Фамилию" 
        required
      />
      {/* <p className={styles.reg_input_name}>Логин</p> */}
      <input 
        type="text" 
        name="regLogin"
        value={login} 
        onChange={(e) => setLogin(e.target.value)} 
        placeholder="Введите свой Логин" 
        required
      />
      {/* <p className={styles.reg_input_name}>Электронная почта</p> */}
      <input 
        type="text" 
        name="regEmail"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}  
        placeholder="Введите свою электронную почту" 
        required
      />
      {/* <p className={styles.reg_input_name}>Пароль</p> */}
      <input 
        type="password" 
        name="regPassword"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}  
        placeholder="Введите свой пароль" 
        required
      />
      {/* <p className={styles.reg_input_name}>Подтверждение пароля</p> */}
      <input 
        type="password" 
        name="regPasswordConfirm" 
        value={passwordConfirm} 
        onChange={(e) => setPasswordConfirm(e.target.value)} 
        placeholder="Подтвердите свой пароль" 
        required
      />
    </div>
      <input type="submit" name = "SubmitForm" value="Регистрация"/>
    </form>
    {passwordError &&
      <Modal>
        <div className={styles.modal_window}>
          {passwordError}
          <button className={styles.modal_button} onClick={() => setPasswordError(null)}>ОК</button>
        </div>
      </Modal>
    }
    {loginError &&
      <Modal>
        <div className={styles.modal_window}>
          {loginError}
          <button className={styles.modal_button} onClick={() => setLoginError(null)}>ОК</button>
        </div>
      </Modal>
    }
    {emailError &&
      <Modal>
        <div className={styles.modal_window}>
          {emailError}
          <button className={styles.modal_button} onClick={() => setEmailError(null)}>ОК</button>
        </div>
      </Modal>
    }
    </>
  );
}
