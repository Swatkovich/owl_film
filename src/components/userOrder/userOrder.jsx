import React, { useState } from 'react';

import styles from './userOrder.module.css';
import { useAuth } from '../../AuthContext';
import Modal from '../Modal/Modal';

function formatObject(object) {
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

const UserOrder = (props) => {
  const [vis, setVis] = useState(false);
  const haveFiles = props.status;
  const {role} = useAuth();

  const handleClick = () => {
    setVis(true) 
  }

  return ( 
    <div className={styles.order_element}>
    <p className={styles.order_element_text}>{`Заказ №${ props.number } от ${props.date}. ${formatObject(props.object)}`}</p>
    {haveFiles && role === 'user' && <button className={styles.download_button}>Скачать</button>}
    {!haveFiles && role === 'user' && <p className={styles.download_information}>Ожидается</p>}
    {haveFiles && role === 'admin' && <p className={styles.download_information}>Отправлено</p>}
    {!haveFiles && role === 'admin' && <button className={styles.download_button} onClick={handleClick}>Загрузить</button>}
    {vis && <Modal>
      <div className={styles.modal}>
        <form action=""></form>
      </div>
    </Modal> }
  </div>
  )
}

export default UserOrder;


// "surname": "Смирнова",
//       "name": "Анна",
//       "email": "smirnova@mail.ru",
//       "object": "Another",
//       "message": "Как получится",
//       "status": false,
//       "date": "18.5.2022",
//       "id": "90KkwwSCmY2L874zoXeJ9"
