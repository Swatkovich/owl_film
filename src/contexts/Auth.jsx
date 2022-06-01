import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({
    token: null,
    user: null,
    login: () => {},
    logout: () => {},
    role: null,
});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('');

    useEffect(()=> {
        if(token) {
            fetch('http://localhost:3001/api/Registration', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',  "auth-token": token }
            }).then(res => res.json()).then(setUser);
        } else {
            setUser(null)
        }
        localStorage.setItem("token", token)
    },[token])

    useEffect(() => {
        if(user) {
         setRole(user.role);
        }
    }, [user])

    function login(token) {
        setToken(token);
    }

    function logout() {
        setToken(null);
    }

    return <AuthContext.Provider value={{ token, user, role, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}


