import styles from "./Admin.module.css"

import { getUsers } from "../../data";
import { getDialog } from "../../data";
import { getOrders } from "../../data";

export default function Admin() {
  const users = getUsers();
  const dialog = getDialog();
  const orders = getOrders();

  function status(order) {
    if (!(order.status)) {
      return <button className={styles.download_button}>Загрузить</button>
    }
    else {
      return <p className={styles.download_information}>Отправлено</p>
    }
  }

  return (
      <div className={styles.admin_box}>

        <div className={styles.users_section}>
          <p className={styles.users_title}>ПОЛЬЗОВАТЕЛИ</p>
            <div className={styles.users_box}>
            {users.map((element, id) => (
            <div className={styles.users_element} key={id}>
              <img className={styles.users_element_avatar} src={element.avatar} alt="avatar"></img>
              <p className={styles.usersa_element_name}>{element.name}</p>
            </div>
            ))}
          </div>
        </div>

        <div className={styles.chat_section}>
          <p className={styles.users_title}>ЧАТ С ПОЛЬЗОВАТЕЛЕМ</p>
          <div className={styles.dialog_box}>
          {dialog.map((element, id) => (
          <div className={styles.dialog_element} key={id}>
            <img className={styles.dialog_element_avatar} src={element.avatar} alt="avatar"></img>
            <p className={styles.dialog_element_message}>{element.message}</p>
          </div>
        ))}
          </div>
        </div>

        <div className={styles.orders_section}> 
            <p className={styles.users_title}>ЗАКАЗЫ ПОЛЬЗОВАТЕЛЯ</p>
            <div className={styles.orders_box}>
            {orders.map((element, id) => (
              <div className={styles.order_element} key={id}>
                <p>{element.name}</p>
                {status(element)}
              </div>
            ))}
            </div>
        </div>
      </div>
  );
}
