import './App.css';
import {Link, Outlet} from "react-router-dom";
import MainPageButton from "./components/MainPageButton/MainPageButton";
import SocialTab from "./components/SocialTab/SocialTab"
import NavButton from "./components/NavButton/NavButton"

function App() {
  return (
      <div className='application' id="application">
        <SocialTab/>
          <Link to="/Main"><MainPageButton/></Link>
          <NavButton id="navButton"/>
              <nav className='nav'>
            <Link className='link' to="/Form">Заявка</Link>
            <Link className='link' to="/Gallery">Галлерея</Link>
            <Link className='link' to="/Admin">Админка</Link>
            <Link className='link' to="/Authorization">Авторизация</Link>
            <Link className='link' to="/Registration">Регистрация</Link>
            <Link className='link' to="/Profile">Профиль</Link>
        </nav>
      <Outlet/>
      </div>
  );
}

export default App;
