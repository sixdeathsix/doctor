import axios from 'axios';

const url = "http://localhost:8000/";

const headers = {
    'Content-Type': 'multipart/form-data'
}

export const $axios = axios.create({
    baseURL: url,
    headers: headers,
});

const token = localStorage.getItem('token');

if (token) $axios.defaults.headers['authorization'] = `Bearer ${token}`;