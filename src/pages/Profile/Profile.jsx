import styles from "./Profile.module.css"

import ProfileTab from "../../components/ProfileTab/ProfileTab";
import Dialog from "../../components/Diolog/Dialog";
import Orders from "../../components/Orders/Orders";
import {useEffect, useState} from "react";
import {useAuth} from '../../contexts/Auth'

export default function Profile() {
    const {token} = useAuth()
    let [orders, setOrders] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/api/Orders', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', "auth-token": token}
        }).then(res => res.json()).then(setOrders);
    }, [])

    return (
        <div className={styles.content_box}>
            <div className={styles.content_box_left}>
                <ProfileTab/>
                <Dialog/>
            </div>
            <div className={styles.orders_box}>
                <p className={styles.orders_title}>ЗАКАЗЫ</p>
                <Orders orders={orders}/>
            </div>
        </div>
    );
}
