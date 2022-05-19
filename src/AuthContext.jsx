import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({
    token: null,
    saveToken: () => {},
    role: null,
    exit: () => {},
    sucsessMessage: null,
    setSucsessMessage: () => {},
    orders: null,
    setOrders: () => {},
    messages: null,
    setMessages: () => {},
});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [role, setRole] = useState(null);
    const [sucsessMessage, setSucsessMessage] = useState(null);
    const [orders, setOrders] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(()=> {
        if(token) {
        fetch('http://localhost:3001/api/Registration', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',  "auth-token": token }
        }).then(res => res.json()).then(data => 
            {setRole(data.role)});
        }
    },[token])

    useEffect(() => {
        fetch('http://localhost:3001/api/Registration', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth-token": token}
        }).then(res =>res.json()).then (data => setOrders(data));
    },[orders, token])

    function saveToken(token) {
        setToken(token);
        localStorage.setItem("token", token)
    }

    function exit() {
        setToken(null);
        localStorage.removeItem("token")
        setRole(null)
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                saveToken,
                role,
                exit,
                sucsessMessage,
                setSucsessMessage,
                orders,
                setOrders,
                messages,
                setMessages
            }}
        >{children}</AuthContext.Provider>)
}

export function useAuth() {
    return useContext(AuthContext)
}


