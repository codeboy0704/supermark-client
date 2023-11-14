import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect } from 'react'
import getUserByToken from '../utils/getUserByToken';
import App from '../App';
import redirect from '../utils/redirect';
import { useNavigate, useNavigation } from 'react-router-dom';
export const UserContext = createContext();

export function UserProvider() {
    const token = Cookies.get('token')
    const navigation = useNavigate()
    const [userData, setUserData] = useState({})
    async function fetchData() {
        try {
            if (token) {
                let data = await getUserByToken(token);
                setUserData(data);
            }
        } catch (e) {
            redirect('/login', navigation)
            console.error(e)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <UserContext.Provider value={userData}>
            <App />
        </UserContext.Provider>
    )
}
