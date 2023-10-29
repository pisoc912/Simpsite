import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_ROOT_URL + '/';

export const getAuthToken = () => {
    return window.sessionStorage.getItem('XSRF-TOKEN');
};

export const setAuthHeader = (token) => {
    window.sessionStorage.setItem('XSRF-TOKEN', token);
};

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {
    const headers = {
        'Authorization': 'Basic ' + window.btoa(data.email + ':' + data.password)
    };
    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    });
};

class AuthService {
    register(username, email, password, role) {
        return axios.post(API_BASE_URL + 'signup', {
            username,
            email,
            password,
            role
        });
    }

    async login(email, password) {
        const response = await request("GET", "/login", {
            email,
            password
        })
        console.log("response", response.data);
        const xsrf = Cookies.get('XSRF-TOKEN')
        window.sessionStorage.setItem("XSRF-TOKEN", xsrf)
        if (response.data.token) {
            console.log("login_token", JSON.stringify(response.data));
            localStorage.setItem('user', JSON.stringify(response.data));


        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }
}

const authServiceInstance = new AuthService();
export default authServiceInstance;