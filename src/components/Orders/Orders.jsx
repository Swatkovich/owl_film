import styles from "./Orders.module.css";

import { getOrders } from "../../data";

export default function Orders(props) {
  const orders = getOrders();

  function status(order) {
    if (order.status) {
      return <button className={styles.download_button}>Скачать</button>
    }
    else {
      return <p className={styles.download_information}>Ожидается</p>
    }
  }

  return (
      <div className={styles.orders_box}>
        {orders.map((element, id) => (
          <div className={styles.order_element} key={id}>
            <p>{element.name}</p>
            {status(element)}
          </div>
        ))}
      </div>
  );
}
