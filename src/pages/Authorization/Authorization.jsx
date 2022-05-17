import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Authorization.module.css";

export default function Authorization() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
          alert('Неверный Логин или Пароль');
      }
          else {
          routeChange();
          return res.text();
        }
    }).then(token => localStorage.setItem("token", token))
    setPassword('');
  }

  return (
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
        type="text" 
        name="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Пароль" 
        required
      />
    </div>
      <input 
        type="submit" 
        name = "Submit" 
        value="Войти"
      />
    </form>
  );
}
