import axios from 'axios'
import utils from '../utils'

/**
 * 请求地址
 * @type {string}
 */
export const base = 'http://127.0.0.1/api/admin';

/**
 * 获取登录信息
 * @param params
 * @returns {*}
 */
export const requestLogin = params => {
    return axios.post(`${base}/login`, params);
};

/**
 * 获取系统信息
 * @returns {*}
 */
export const requestSysInfo = () => {
    return axios.get(`${base}/sysInfo`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 获取角色列表
 * @returns {*}
 */
export const requestRoles = (slug = null) => {
    console.log(slug)
    return axios.get(`${base}/role`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token,
            slug: slug
        }
    });
};

/**
 * 创建一个角色
 * @returns {*}
 */
export const requestCreateRole = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.post(`${base}/role`, params);
};


/**
 * 修改一个角色
 * @returns {*}
 */
export const requestEditRole = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.patch(`${base}/role/${params.id}`, params);
};


/**
 * 删除一个角色
 * @param id
 * @returns {*}
 */
export const requestDeleteRole = (id) => {
    return axios.delete(`${base}/role/${id}`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 获取权限列表
 * @param id
 * @returns {*}
 */
export const requestPermissions = () => {
    return axios.get(`${base}/permission`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 角色同步权限
 * @param role int id
 * @param permissions array ids
 * @returns {*}
 */
export const requestRoleSyncPermissions = (role, permissions) => {
    let params = Object.assign({api_token: utils.auth.getLoginUser().api_token},{permissions});
    return axios.patch(`${base}/role/syncPermissions/${role}`, params);
};

/**
 * 获得角色权限列表
 * @param role
 * @returns {*}
 */
export const requestRolePermissions = (role) => {
    return axios.get(`${base}/role/permissions/${role}`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};
