import './App.css';
import {Link, Outlet} from "react-router-dom";
import MainPageButton from "./components/MainPageButton/MainPageButton";
import SocialTab from "./components/SocialTab/SocialTab"
import menu from './components/componentsImage/menu.png'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleCllick = () => {
    setShow(!show)
  }

  return (
      <div className='application' id="application">
        <div className='nav_close' onClick={()=>setShow(false)}></div>
        <SocialTab className='social_tab_area'/>
          <Link className='main_button' onClick={() => setShow(false)} to="/Main"><MainPageButton/></Link>
          <img src={menu} onClick={handleCllick} alt="menu" className='navIcon'/>
          <nav className={show? 'nav_true' : 'nav_false'} id='nav'>
            <Link className='link' onClick={() => setShow(false)} to="/Form">Заявка</Link>
            <Link className='link' onClick={() => setShow(false)} to="/Gallery">Галлерея</Link>
            <Link className='link' onClick={() => setShow(false)} to="/Admin">Админка</Link>
            <Link className='link' onClick={() => setShow(false)} to="/Authorization">Авторизация</Link>
            <Link className='link' onClick={() => setShow(false)} to="/Registration">Регистрация</Link>
            <Link className='link' onClick={() => setShow(false)} to="/Profile">Профиль</Link>
          </nav>
      <Outlet/>
      </div>
  );
}

export default App;
