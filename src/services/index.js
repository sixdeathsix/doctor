import axios from 'axios';

const url = "http://localhost:8000/";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
}

const token = localStorage.getItem('token');

if (token) headers['authorization'] = `Bearer ${token}`;

const $axios = axios.create({
    withCredentials: true,
    baseURL: url,
    headers: headers,
})


class ApiProvider {

    login(login, password) {
        return $axios.post("api/token/", {login, password});
    }

}

export default new ApiProvider();
