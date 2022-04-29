import axios from 'axios';
import { baseURL } from '../config/index';
console.log(baseURL);

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'http://code1.haisheteam.com',
    // baseURL: 'http://localhost:3030',
    baseURL,
    //cookie
    // withCredentials: true,
    // http://192.168.1.166:8081/
    // baseURL: 'http://code1.haisheteam.com',
    timeout: 60000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;