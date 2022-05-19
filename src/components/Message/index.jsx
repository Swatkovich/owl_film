import {useEffect, useState } from 'react'

import { createPortal } from 'react-dom';
import "./Modal.css";
import styles from "../FormTab/FormTab.module.css";
import React from "@types/react";

const Modal = ({ children }) => {

    { sucsessMessage &&
    <Modal>
        <div className={styles.modal_window}>
            {sucsessMessage}
            <button className={styles.modal_button} onClick={() => setSucsessMessage(null)}>ОК</button>
        </div>
    </Modal>
    }

    return createPortal(<div className="modal">{children}</div>, document.body)
}

export default Modal;
