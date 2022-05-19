import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({
    token: null,
    user: null,
    login: () => {},
    logout: () => {},
<<<<<<< HEAD
    role: null,
=======
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
<<<<<<< HEAD
    const [role, setRole] = useState('');
=======
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af

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

<<<<<<< HEAD
    useEffect(() => {
        if(user) {
         setRole(user.role);
        }
    }, [user])

=======
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
    function login(token) {
        setToken(token);
    }

    function logout() {
        setToken(null);
    }

<<<<<<< HEAD
    return <AuthContext.Provider value={{ token, user, role, login, logout }}>{children}</AuthContext.Provider>
=======
    return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>
>>>>>>> c8138f9792169dd858d2747b5f71898c392644af
}

export function useAuth() {
    return useContext(AuthContext)
}


