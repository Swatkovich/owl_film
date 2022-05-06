import './App.css';
import {Link, Outlet} from "react-router-dom";
import MainPageButton from "./components/MainPageButton/MainPageButton";
import SocialTab from "./components/SocialTab/SocialTab"
import NavButton from "./components/NavButton/NavButton"
// import ToFormButton from './components/ToFormButton/ToFormButton';

// import welcomingImage from './components/componentsImage/3.2.png'
// import firstImage from './components/componentsImage/4.2.png'
// import secondImage from './components/componentsImage/10.2.png'
// import thirdImage from './components/componentsImage/7.2.png'

function App() {
  return (
      <div className='application'>
        <SocialTab/>
          <Link to="/Main"><MainPageButton/></Link>
          <NavButton id="navButton"/>
          <nav className='nav' id="nav">
            <Link className='link' to="/Form">Form</Link>
            <Link className='link' to="/Gallery">Gallery</Link>
            <Link className='link' to="/Admin">Admin</Link>
            <Link className='link' to="/Authorization">Authorization</Link>
            <Link className='link' to="/Registration">Registration</Link>
            <Link className='link' to="/Profile">Profile</Link>
        </nav>
      <Outlet/>
      {/* <div className="body">
      <div className="bodyUnit">
        <img className="img" src={welcomingImage} alt='portret'></img>
        <div className="formJump">
          <p className="formJumpText">Никогда не поздно приобщиться к культуре аналоговой фотографии</p>
          <ToFormButton />
        </div>
      </div>
      <div className="bodyUnit">
        <div><img className="img" src={firstImage} alt='portret'></img></div>
        <div className="bodyUnitText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      <div className="bodyUnit">
        <div className="bodyUnitText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div><img className="img" src={secondImage} alt='portret'></img></div>
      </div>
      <div className="bodyUnit">
        <div><img className="img" src={thirdImage} alt='portret'></img></div>
        <div className="bodyUnitText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div> */}
      </div>
  );
}

export default App;
