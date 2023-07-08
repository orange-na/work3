import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || "{}");
        setCurrentUser(storedUser);
      }, []);
      
    const login = async (input) => {
        const res = await axios.post('http://localhost:8800/api/auth/login', input, { withCredentials: true });
        setCurrentUser(res.data)
    }

    const logout = async () => {
        await axios.post('http://localhost:8800/api/auth/logout', {} ,{ withCredentials: true });
        setCurrentUser(null)
    };



    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);


    return (
        <AuthContext.Provider value={ {currentUser, login, logout} }>
            { children }
        </AuthContext.Provider>
    )
}