import styles from "./Profile.module.css"

import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Dialog from "../../components/Diolog/Dialog";
import Orders from "../../components/Orders/Orders";
import { useEffect, useState } from "react";

export default function Profile() {
  let [messages, setMessages] = useState();
  let [orders, setOrders] = useState();
  let [user, setUser] = useState();

  useEffect(()=> {
    fetch('http://localhost:3001/api/Orders', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  "auth-token": localStorage.getItem("token")} 
    }).then(res => res.json()).then(data => setOrders(data));
  }, [])
  useEffect(()=> {
    fetch('http://localhost:3001/api/Messages', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "auth-token": localStorage.getItem("token")} 
    }).then(res => res.json()).then(data => setMessages(data));
  }, [])
  useEffect(()=> {
    fetch('http://localhost:3001/api/Registration', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "auth-token": localStorage.getItem("token")} 
    }).then(res => res.json()).then(data => {setUser(data)});
  }, [])

  return (
    <div className={styles.content_box}>
        <div className={styles.content_box_left}>
          {user ? <ProfileTab user={user}  /> : null }
          {messages ? <Dialog messages={messages} user={user}/> : null}
        </div>
      <div className={styles.orders_box}>
        <p className={styles.orders_title}>ЗАКАЗЫ</p>
        {orders && <Orders orders={orders} isAdmin={user.role === 'admin'}/>}
      </div>
    </div> 
  );
}
