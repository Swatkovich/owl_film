import './App.css';
import {Link, Outlet} from "react-router-dom";
import SocialTab from "./components/SocialTab/SocialTab"
import { useAuth } from './AuthContext';
import MainPageButton from './components/MainPageButton/MainPageButton';

function App() {
  const {role, exit} = useAuth();


  return (
      <div className={'application'} id="application">
          <SocialTab className='social_tab_area'/>
           <div className='top_bar'>
            <Link className='main_button' to="/Main"><MainPageButton/></Link>
            <nav className='nav_true' id='nav'>
              <Link className='link' to="/Form">Заявка</Link>
              <Link className='link' to="/Gallery">Галерея</Link>
              {!role  && <Link className='link' to="/Authorization">Войти</Link> }
              {!role  && <Link className='link' to="/Registration">Регистрация</Link> }
              {role === 'user' && <Link className='link' to="/Profile">Профиль</Link> }
              {role === 'admin' && <Link className='link' to="/Admin">Администрирование</Link> }
              {role && <Link onClick={exit} className= "link" to="/Main">Выйти</Link>}
            </nav>
        </div>
      <Outlet/>
      </div>
  );
}

export default App;
