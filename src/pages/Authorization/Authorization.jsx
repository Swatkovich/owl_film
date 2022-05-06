import styles from "./Authorization.module.css";

export default function Authorization() {
  return (
    <form method="POST" className={styles.auth_box}>
    <div className={styles.login_data}>
      <input type="text" name="Login" placeholder="Логин" required/>
      <input type="text" name="Password" placeholder="Пароль" required/>
    </div>
      <input type="submit" name = "Submit" value="Войти"/>
    </form>
  );
}
