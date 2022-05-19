import styles from "./Dialog.module.css";
import {getAdminData} from "../../data";
import {useState, useCallback, useEffect} from 'react'
import {useAuth} from '../../contexts/Auth'

export default function Dialog(props) {
    const { token, user } = useAuth()
    const adminData = getAdminData();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/Messages', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth-token": token},
        }).then(res => res.json()).then(setMessages);
    }, [user, token])

    const handleAvatar = (element) => {
        if (element.avatar === 'avatar2') {
            return adminData.adminAvatar
        } else {
            return adminData.userAvatar
        }
    }

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        const input = e.currentTarget[0];
        const messageText = e.currentTarget[0].value;
        let block = document.getElementById("mb");
        block.scrollTop = block.scrollHeight;
        if (!messageText) {
            return
        }
        fetch('http://localhost:3001/api/Messages', {
            method: 'POST',
            body: JSON.stringify({"avatar": "avatar1", "message": messageText, "userId": user.id}),
            headers: {'Content-Type': 'application/json'},
        }).then(() => {
            setMessages(messages.concat([{avatar: user.avatar, message: messageText}]))
            input.value = '';
        })
    }, [user?.id, messages, user?.avatar])

    return (
        <div className={styles.dialog_box}>
            <div id="mb" className={styles.messages_box}>
                {messages.map((element, id) => (
                    <div className={styles.dialog_element} key={id}>
                        <img className={styles.dialog_element_avatar} src={handleAvatar(element)} alt="avatar" />
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
