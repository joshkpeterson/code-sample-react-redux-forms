import axios from 'axios';

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const instance = axios.create({
    baseURL: 'https://private-6e6a5-hero9.apiary-mock.com/'
});


export default instance;