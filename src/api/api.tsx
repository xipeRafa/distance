import axios from 'axios';

import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()


const axiosApi = axios.create({
    baseURL: VITE_API_URL
});


axiosApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'token': localStorage.getItem('token')
    }

    return config;
})


export default axiosApi;
