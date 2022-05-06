import styles from "./Profile.module.css"

import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Dialog from "../../components/Diolog/Dialog";
import Orders from "../../components/Orders/Orders";

export default function Profile() {
  return (
    <div className={styles.content_box}>
        <div className={styles.content_box_left}>
          <ProfileTab />
          <Dialog />
        </div>
      <div className={styles.orders_box}>
        <p className={styles.orders_title}>ЗАКАЗЫ</p>
        <Orders />
      </div>
    </div> 
  );
}
