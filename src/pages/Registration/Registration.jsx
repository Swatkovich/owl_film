import styles from "./Registration.module.css"

export default function Registration() {
  return (
    <form method="POST" className={styles.reg_box}>
    <div className={styles.reg_data}>
    <p className={styles.reg_input_name}>Имя</p>
      <input type="text" name="Nickname" placeholder="Введите своё имя" required/>
      <p className={styles.reg_input_name}>Электронная почта</p>
      <input type="text" name="Email" placeholder="Введите свою электронную почту" required/>
      <p className={styles.reg_input_name}>Пароль</p>
      <input type="text" name="Password" placeholder="Введите свой пароль" required/>
      <p className={styles.reg_input_name}>Подтверждение пароля</p>
      <input type="text" name="PasswordConfirm" placeholder="Потвердите свой пароль" required/>
    </div>
      <input type="submit" name = "Submit" value="Регистрация"/>
    </form>
  );
}
