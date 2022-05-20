import React, {useState} from 'react';

import styles from './userOrder.module.css';
import {useAuth} from '../../contexts/Auth';
import {Modal} from '../Modal';

function formatObject(object) {
    switch (object) {
        case "Marige/ Event":
            return "Свадьба/ Мероприятие"
        case "Couple Session":
            return "Парная фотосессия"
        case "Solo Session":
            return "Одиночная фотосессия"
        default:
            return "Другое"
    }
}

const UserOrder = (props) => {
    const [downloadModal, setDownloadModal] = useState(null);
    const [uploadModal, setUploadModal] = useState(null);
    const [uploadLink, setUploadLink] = useState('');
    const haveFiles = props.status;
    const {role} = useAuth();
    const link = props.link;

    function handleClickUser(link) {
        console.log(downloadModal);
        setDownloadModal(link);
        console.log(downloadModal);
    }

    function handleClickAdmin() {
        setUploadModal("значение");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(uploadLink);
        fetch(`${process.env.URL}/${process.env.PORT}/api/Orders`, {
            method: 'PUT',
            body: JSON.stringify({"link": uploadLink, "orderId": props.id}),
            headers: {'Content-Type': 'application/json'},
        })
        console.log(uploadLink);
        setUploadModal(null);
    }

    return (
        <div className={styles.order_element}>
            <p className={styles.order_element_text}>{`Заказ №${props.number} от ${props.date}. ${formatObject(props.object)}`}</p>
            {haveFiles && role === 'user' && <button className={styles.download_button} onClick={() => handleClickUser(link)}>Скачать</button>}
            {!haveFiles && role === 'user' && <p className={styles.download_information}>Ожидается</p>}
            {haveFiles && role === 'admin' && <p className={styles.download_information}>Отправлено</p>}
            {!haveFiles && role === 'admin' &&<button className={styles.download_button} onClick={() => handleClickAdmin()}>Загрузить</button>}

{downloadModal &&   <Modal>
                        <div className={styles.modal_window}>
                            <a target='_blank' rel='noreferrer' href={downloadModal} className={styles.modal_link} onClick={() => setDownloadModal(null)}>Ссылка на скачивание</a>
                            <button className={styles.modal_button} onClick={() => setDownloadModal(null)}>Закрыть</button>
                        </div>
                    </Modal>}

{uploadModal && <Modal>
                    <div className={styles.modal_window}>
                        <form className={styles.updateForm} onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="Link"
                                value={uploadLink}
                                onChange={(e) => setUploadLink(e.target.value)}
                                placeholder="Вставьте ссылку"
                                required />
                            <input
                                type="submit"
                                name="SubmitLink"
                                value="Отправить"
                            />
                        </form>
                    </div>
                </Modal>}
        </div>
    )
}

export default UserOrder;
