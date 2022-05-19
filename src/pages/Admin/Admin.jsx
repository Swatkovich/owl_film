import styles from "./Admin.module.css"
import { useEffect, useState, useCallback } from "react";

import { getAdminData } from "../../data";
import Orders from "../../components/Orders/Orders";

export default function Admin() {
  const [users, setUsers] = useState();
  const [userMessages, setUserMessages] = useState([]);
  const [orders, setOrders] = useState();
  const adminData = getAdminData();
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();

  const handleUserClick = (user, id) => {
    setUserMessages(user.messages);
    setUser(user);
    for (let i = 0; i < users.length; i++) {
      document.getElementById(i).style.border="0.1vh solid #e9e9e9";
    }
    document.getElementById(id).style.borderColor="#00FF00";
  }

  const handleAvatar = (element) => {
    if (element.avatar === 'avatar2') {
      return adminData.adminAvatar
    }
    else {
      return adminData.userAvatar
    }
  }


  const filteredOrders = user ? orders.filter((order) => order.email === user.email) : [];


  useEffect(() => {
    fetch('http://localhost:3001/api/AdminOrders', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' } 
    }).then(res => res.json()).then(data => {setOrders(data)});
  }, [])

  useEffect(()=> {
    fetch('http://localhost:3001/api/Admin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' } 
    }).then(res => res.json()).then(data => {setUsers(data);});
  }, [])

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const input = e.currentTarget[0];
    const messageText = e.currentTarget[0].value;
    if (!messageText) {
      return
    }
    fetch('http://localhost:3001/api/Messages' , {
      method: 'POST',
      body: JSON.stringify({ "avatar": "avatar2", "message": messageText, "userId": user.id}),
      headers: { 'Content-Type': 'application/json'},
    }).then(() => {
      setUserMessages(userMessages.concat([{avatar: "avatar2", message: messageText}]))
      input.value = '';})
  }, [user?.id, userMessages])

  return (
      <div className={styles.admin_box}>

  {users ? <div className={styles.users_section}>
          <p className={styles.users_title}>ПОЛЬЗОВАТЕЛИ</p>
            <div className={styles.users_box}>
            {users.map((element, id) => (
           <div className={styles.users_element} key={id} id={id} onClick={() => handleUserClick(element, id)}>
              <img className={styles.users_element_avatar} src={handleAvatar(element.avatar)} alt="avatar"></img>
              <p className={styles.usersa_element_name}>{element.surname} {element.name}</p>
            </div>
            ))}
          </div>
        </div> : null }

  {users ? <div className={styles.chat_section}>
          <p className={styles.users_title}>ЧАТ С ПОЛЬЗОВАТЕЛЕМ</p>
          <div className={styles.dialog_box}>
        <div className={styles.messages_box}>
          {userMessages.map((element, id) => (
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
        </div>  : null }

  {filteredOrders ? <div className={styles.orders_section}> 
              <p className={styles.users_title}>ЗАКАЗЫ ПОЛЬЗОВАТЕЛЯ</p>
              <div className={styles.orders_box}>
              <Orders orders={filteredOrders}></Orders>
              </div>
            </div> : null }

      </div> 
  );
}
