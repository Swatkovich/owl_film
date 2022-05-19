import styles from "./Dialog.module.css";
import { getAdminData } from "../../data";
import { useState, useCallback } from 'react'

export default function Dialog( props ) {
  const [messages, setMessages] = useState(props.messages);
  const user = props.user;
  const adminData = getAdminData();

  const handleAvatar = (element) => {
    if (element.avatar === 'avatar2') {
      return adminData.adminAvatar
    }
    else {
      return adminData.userAvatar
    }
  }

    const handleSubmit = useCallback(e => {
    e.preventDefault()
    const input = e.currentTarget[0];
    const messageText = e.currentTarget[0].value;
    if (!messageText) {
      return 
    }
    fetch('http://localhost:3001/api/Messages' , {
      method: 'POST',
      body: JSON.stringify({ "avatar": "avatar1", "message": messageText, "userId": user.id}),
      headers: { 'Content-Type': 'application/json'},
    }).then(() => {
    setMessages(messages.concat([{avatar: user.avatar, message: messageText}])) 
    input.value = '';})
  },[user?.id, messages, user.avatar])

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
        <form onSubmit={handleSubmit} className={styles.form_input}>
          <input
            className={styles.dialog_input} 
            type="text" 
            name="message"
            placeholder="Сообщение"
            autoComplete='off' 
            required/>
        </form>
      </div>
  );
}
