import {createContext, useState, useContext, useEffect} from 'react';

const MessageContext = createContext({
    /** Глобальное сообщение пользователю в модальном окне с кнопкой ОК */
    message: '',
});

export const MessageProvider = ({children}) => {
    const [message, setMessage] = useState('');

    return <MessageContext.Provider value={{message, setMessage}}>{children}</MessageContext.Provider>
}

export function useMessage() {
    return useContext(MessageContext)
}


