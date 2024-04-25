import axios from 'axios';

const baseUrl = 'http://localhost:5000';
// const baseUrl = '';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000
})


export default instance;