import styles from "./Orders.module.css";

export default function Orders(props) {
  const orders = props.orders;

  function status(order) {
    if (order.status) {
      return <button className={styles.download_button}>Скачать</button>
    }
    else {
      return <p className={styles.download_information}>Ожидается</p>
    }
  }

  function object(object) {
    if (object === "Marige/ Event") {
      return "Свадьба/ Мероприятие"
    }
    else if (object === "Couple Session") {
      return "Парная фотосессия"
    }
    else if (object === "Solo Session") {
      return "Одиночная фотосессия"
    }
    else {
      return "Другое"
    }
  }

  return (
      <div className={styles.orders_box}>
        {orders.map((element, id) => (
          <div className={styles.order_element} key={id}>
            <p className={styles.order_element_text}>{`Заказ №${ id + 1 } от ${element.date}. ${object(element.object)}`}</p>
            {status(element)}
          </div>
        ))}
      </div>
  );
}
