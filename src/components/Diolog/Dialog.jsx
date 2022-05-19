import styles from "./Dialog.module.css";
import {getAdminData} from "../../data";
import {useState, useCallback, useEffect} from 'react'
import {useAuth} from '../../contexts/Auth'

export default function Dialog(props) {
<<<<<<< HEAD
    const { token, user } = useAuth()
=======
    const { token, currentUser } = useAuth()
    const user = props.user;
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
    const adminData = getAdminData();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/Messages', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth-token": token},
<<<<<<< HEAD
        }).then(res => res.json()).then(setMessages);
    }, [user, token])
=======
            query: {
                userId1: user.id,
                userId2: currentUser.id,
            }
        }).then(res => res.json()).then(setMessages);
    }, [user])
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af

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
<<<<<<< HEAD
        let block = document.getElementById("mb");
        block.scrollTop = block.scrollHeight;
=======
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
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
<<<<<<< HEAD
            <div id="mb" className={styles.messages_box}>
=======
            <div className={styles.messages_box}>
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
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
