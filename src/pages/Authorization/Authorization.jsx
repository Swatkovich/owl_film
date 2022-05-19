import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/Auth';
import {useMessage} from '../../contexts/Message';

import styles from "./Authorization.module.css";

export default function Authorization() {
    const {setMessage}=useMessage()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { login: onLoginSuccess } = useAuth();

    let navigate = useNavigate();

    const routeChange = () => {
        let path = "/";
        navigate(path)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3001/api/Login', {
            method: 'POST',
            body: JSON.stringify({"login": login, "password": password}),
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => {
                if (res.status === 403) {
                    throw new Error('Неверный Логин или Пароль')
                }
                return res.text();
            })
            .then((token) => {
                onLoginSuccess(token);
                routeChange();
            })
            .catch((error) => {
                setMessage(error.message);
            })
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
                        name="SubmitForm"
                        value="Войти"
                    />
                </div>
            </form>
        </>
    );
}
