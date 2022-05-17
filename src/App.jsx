import './App.css';
import {Link, Outlet} from "react-router-dom";
import SocialTab from "./components/SocialTab/SocialTab"
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState();

  useEffect(()=> {
    fetch('http://localhost:3001/api/Registration', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  "auth-token": localStorage.getItem("token")} 
    }).then(res => res.json()).then(data => {setUser(data); console.log(data)});
  }, [])

  const handleExit = () => {
    localStorage.removeItem("token");
  }

  return (
      <div className='application' id="application">
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
              {user.role !== '' ? <button onClick={handleExit} className= "exit_button">Выйти</button> : null}
            </nav>
        </div> : null}
      <Outlet/>
      </div>
  );
}

export default App;
