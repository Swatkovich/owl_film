import styles from "./Dialog.module.css";

export default function Dialog( props ) {
  const messages = props.messages;

  return (
      <div className={styles.dialog_box}>
        {messages.map((element, id) => (
          <div className={styles.dialog_element} key={id}>
            <img className={styles.dialog_element_avatar} src={element.avatar} alt="avatar"></img>
            <p className={styles.dialog_element_message}>{element.message}</p>
          </div>
        ))}
       <input className={styles.dialog_input} type="text" name="message" placeholder="Сообщение" required/>
      </div>
  );
}
