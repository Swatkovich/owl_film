import './App.css';
import {Link, Outlet} from "react-router-dom";
import SocialTab from "./components/SocialTab/SocialTab"
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState('');

  useEffect(()=> {
    fetch('http://localhost:3001/api/Registration', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  "auth-token": localStorage.getItem("token")} 
    }).then(res => res.json()).then(data => {setUser(data); setToken(localStorage.getItem("token")); console.log(token)});
  }, [])

  const handleExit = () => {
    console.log(token);
    localStorage.removeItem("token");
    setToken('');
  }

  return (
      <div className={'application'} id="application">
          <SocialTab className='social_tab_area'/>
          { user ? <div className='top_bar'>
            <Link className='main_button' to="/Main"></Link>
            <nav className='nav_true' id='nav'>
              <Link className='link' to="/Form">Заявка</Link>
              <Link className='link' to="/Gallery">Галлерея</Link>
              {user.role !== 'user' && user.role !== 'admin' ? <Link className='link' to="/Authorization">Войти</Link> : null}
              {user.role !== 'user' && user.role !== 'admin' ? <Link className='link' to="/Registration">Регистрация</Link>: null }
              {user.role !== 'admin' && user.role === "user" ? <Link className='link' to="/Profile">Профиль</Link> : null }
              {user.role === 'admin' ? <Link className='link' to="/Admin">Админка</Link> : null}
              {user.role !== '' ? <Link onClick={handleExit} className= "link" to="/Main">Выйти</Link> : null}
            </nav>
        </div> : null}
      <Outlet/>
      </div>
  );
}

export default App;
