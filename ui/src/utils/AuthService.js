import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@/context/UserContext';

const API_BASE_URL = 'http://localhost:8080';  // Adjust this based on your configuration

function useAuthService() {

    const [user, setUser] = useState(null);

    const getHeaders = ({ email, password }) => {
        let headers = {};
        if (email && password) {
            headers = {
                'Authorization': 'Basic ' + window.btoa(email + ':' + password)
            };
        } else {
            const authorization = sessionStorage.getItem('Authorization');
            if (authorization) {
                headers = {
                    'Authorization': authorization
                };
            }
        }
        console.log(headers);
        return headers;
    };

    const register = async (user, onLoading) => {
        onLoading(true)
        try {
            const response = await axios.post(API_BASE_URL + '/register', {
                email: user.email,
                password: user.pwd,
                role: 'user',
            });
            return response.data;
        } finally {
            onLoading(false)
        }
    };

    const login = async (email, password) => {
        const response = await axios.get(API_BASE_URL + '/login', {
            headers: getHeaders({ email, password }),
            params: { email, password }  // Assuming login uses query params. Adjust if needed.
        });
        console.log("response", response.data.email);

        const xsrf = sessionStorage.getItem('XSRF-TOKEN');
        if (xsrf) {
            sessionStorage.setItem("XSRF-TOKEN", xsrf);
        }
        if (response.data) {
            console.log("login_token", JSON.stringify(response.data));
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    };

    const logout = () => {
        localStorage.removeItem('user');
    };

    return {
        user,
        register,
        login,
        logout
    };
}

export default useAuthService;
