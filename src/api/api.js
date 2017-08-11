import axios from 'axios'
import utils from '../utils'

export const base = 'http://127.0.0.1/api/admin';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params);
};

export const requestSysInfo = () => {
    return axios.get(`${base}/sysInfo`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

export const requestUserPermissions = () => {
    return axios.get(`${base}/user/permission/list`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};
