import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Modal from '../../components/Modal/Modal';

import styles from "./Authorization.module.css";

export default function Authorization() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {saveToken} = useAuth();
  const {setSucsessMessage} = useAuth();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Main";
    navigate(path)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3001/api/Login' , {
      method: 'POST',
      body: JSON.stringify({ "login": login, "password": password }),
      headers: { 'Content-Type': 'application/json'},
    }).then((res) => {
      if (res.status === 403) {
          setErrorMessage('Неверный Логин или Пароль');
      }
          else {
          setSucsessMessage('Успешная авторизация');
          routeChange();
          return res.text();
        }
    }).then(saveToken)
    setPassword('');
  }

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.auth_box}>
    <div className={styles.login_data}>
      <input 
        type="text" 
        name="Login" 
        value={login} 
        onChange={(e) => setLogin(e.target.value)} 
        placeholder="Логин" 
        required
      />
      <input 
        type="password" 
        name="LoginPassword" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Пароль" 
        required
      />
      <input 
        type="submit" 
        name = "SubmitForm" 
        value="Войти"
      />
      </div>
    </form>
    { errorMessage && 
      <Modal>
        <div className={styles.modal_window}>
          {errorMessage}
          <button className={styles.modal_button} onClick={() => setErrorMessage(null)}>ОК</button>
        </div>
      </Modal>
      }
</>
  );
}
