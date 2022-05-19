import "./styles.css";
import React from "react";
import {useMessage} from '../../contexts/Message'
import {Modal} from '../Modal'

export const Message = () => {
    const {message, setMessage} = useMessage()

    if (!message) {
        return null
    }

    return <Modal>
        <div id='modal_window'>
            {message}
            <button id='modal_button' onClick={() => setMessage(null)}>ОК</button>
        </div>
    </Modal>
}
