import {Link} from "react-router-dom";
import MainPageButton from "../MainPageButton/MainPageButton";
import React from "react";
import styles from './topbar.module.css'
import {useAuth} from "../../contexts/Auth";

export function TopBar() {
    const { user, logout } = useAuth();

    return (
        <div className={styles.top_bar}>
            <Link className={styles.main_button} to="/"><MainPageButton/></Link>
            <nav className={styles.nav} id='nav'>
                <Link className={styles.link} to="/Form">Заявка</Link>
                <Link className={styles.link} to="/Gallery">Галерея</Link>
                {!user && <Link className={styles.link} to="/Authorization">Войти</Link>}
                {!user && <Link className={styles.link} to="/Registration">Регистрация</Link>}
                {user?.role === 'user' && <Link className={styles.link} to="/Profile">Профиль</Link>}
                {user?.role === 'admin' && <Link className={styles.link} to="/Admin">Администрирование</Link>}
                {user && <Link onClick={logout} className={styles.link} to="/">Выйти</Link>}
            </nav>
        </div>
    )
}
