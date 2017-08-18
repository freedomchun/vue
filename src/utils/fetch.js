import axios from 'axios';
import {Message, MessageBox} from 'element-ui';
import store from '@/store';
import {getToken} from '@/utils/auth';

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 3000
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + getToken();
    return config;
}, error => {
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(typeof error.response.status === 'undefined'){
            return Promise.reject(error);
        }
        
        switch (error.response.status) {
            case 401:
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('logOut').then(() => {
                        location.reload();
                    })
                });
                break;
            case 422:
                let msg = [];
                for (let v in error.response.data) {
                    msg.push(error.response.data[v]);
                }
                Message.warning(msg.join("\n"));
                break;
            case 404:
                Message.error('没有这个请求。');
                break;
            case 500:
                Message.error('不能访问本次请求。');
                break;
            default :
                Message.warning(error.response.data);
                break;
        }
        return Promise.reject(error);
    }
);

export default service;
