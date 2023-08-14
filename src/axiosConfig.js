import axios from 'axios';
import { rootStore } from 'store';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URI,
    timeout: 1000
});

instance.interceptors.request.use(config => {
    if (rootStore.authStore.token) {
        config.headers.Authorization = `Bearer ${rootStore.authStore.token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export default instance;
