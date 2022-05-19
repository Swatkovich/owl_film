import UserOrder from "../userOrder/userOrder";
import styles from "./Orders.module.css";

export default function Orders(props) {
  const orders = props.orders;

  return (
      <div className={styles.orders_box}>
        {orders.map((element, id) => (
          <UserOrder date={element.date} isAdmin={props.isAdmin} key={id} object={element.object} status={element.status} number = {id + 1} link={element.link} id={element.id}/>
        ))}
      </div>
  );
}
