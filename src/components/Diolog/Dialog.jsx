import styles from "./Dialog.module.css";
import { getAdminData } from "../../data";

export default function Dialog( props ) {
  const messages = props.messages;
  const adminData = getAdminData();

  const handleAvatar = (element) => {
    if (element.avatar === 'avatar2') {
      return adminData.adminAvatar
    }
    else {
      return adminData.userAvatar
    }
  }
  return (
      <div className={styles.dialog_box}>
        <div className={styles.messages_box}>
          {messages.map((element, id) => (
            <div className={styles.dialog_element} key={id}>
              <img className={styles.dialog_element_avatar} src={handleAvatar(element)} alt="avatar"></img>
              <p className={styles.dialog_element_message}>{element.message}</p>
            </div>
          ))}
        </div>
       <input className={styles.dialog_input} type="text" name="message" placeholder="Сообщение" required/>
      </div>
  );
}
