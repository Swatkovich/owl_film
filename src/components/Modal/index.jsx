import {useEffect, useState } from 'react'

import { createPortal } from 'react-dom';
import "./styles.css";

export const Modal = ({ children }) => {
    const [modalRoot, setModalRoot] = useState(null);

    useEffect(() => {
        const modalRoot = document.createElement("div");

        document.body.appendChild(modalRoot);

        setModalRoot(modalRoot);

        return () => {
            document.body.removeChild(modalRoot);
        }
    }, []);

    if(!modalRoot) {
        return null;
    }

    return createPortal(<div id='modal'>{children}</div>, modalRoot)
}
