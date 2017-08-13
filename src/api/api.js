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
 * 注销登录
 * @returns {*}
 */
export const requestLogout = () => {
    return axios.post(`${base}/logout`, {
        api_token: utils.auth.getLoginUser().api_token
    });
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
 * @param slug
 * @returns {*}
 */
export const requestRoles = (slug = null) => {
    return axios.get(`${base}/role`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token,
            slug
        }
    });
};

/**
 * 创建一个角色
 * @param params
 * @returns {*}
 */
export const requestCreateRole = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.post(`${base}/role`, params);
};


/**
 * 修改一个角色
 * @param params
 * @returns {*}
 */
export const requestEditRole = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.patch(`${base}/role/${params.id}`, params);
};


/**
 * 删除一个角色
 * @param role
 * @returns {*}
 */
export const requestDeleteRole = (role) => {
    return axios.delete(`${base}/role/${role}`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 获取权限列表
 * @param slug
 * @returns {*}
 */
export const requestPermissions = (slug = null) => {
    return axios.get(`${base}/permission`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token,
            slug
        }
    });
};

/**
 * 创建权限
 * @param params
 * @returns {*}
 */
export const requestCreatePermission = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.post(`${base}/permission`, params);
};

/**
 * 修改权限
 * @param params
 * @returns {*}
 */
export const requestEditPermission = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.patch(`${base}/permission/${params.id}`, params);
};

/**
 * 删除权限
 * @param permission
 * @returns {*}
 */
export const requestDeletePermission = (permission) => {
    return axios.delete(`${base}/permission/${permission}`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 角色同步权限
 * @param role
 * @param permissions array ids
 * @returns {*}
 */
export const requestRoleSyncPermissions = (role, permissions) => {
    let params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, {permissions});
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

/**
 * 获得账户列表
 * @param otherParams page:页码, pageSize:数量
 * @returns {*}
 */
export const requestUsers = (otherParams = {}) => {
    let params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, otherParams);
    return axios.get(`${base}/user`, {params});
};

/**
 * 删除账户
 * @param user
 * @returns {*}
 */
export const requestDeleteUser = (user) => {
    return axios.delete(`${base}/user/${user}`, {
        params: {
            api_token: utils.auth.getLoginUser().api_token
        }
    });
};

/**
 * 创建账户
 * @param params
 * @returns {*}
 */
export const requestCreateUser = (params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.post(`${base}/user`, params);
};

/**
 * 编辑账户
 * @param user
 * @param permissions
 * @returns {*}
 */
export const requestEditUser = (user, params) => {
    params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, params);
    return axios.patch(`${base}/user/${user}`, params);
};

/**
 * 同步账户角色组
 * @param user
 * @param roles
 * @returns {*}
 */
export const requestSyncUserRoles = (user, roles) => {
    let params = Object.assign({api_token: utils.auth.getLoginUser().api_token}, {roles});
    return axios.patch(`${base}/user/syncRoles/${user}`, params);
};

/**
 * 重置密码
 * @param user
 * @returns {*}
 */
export const requestResetPassword = (user) => {
    return axios.patch(`${base}/user/resetPassword/${user}`, {
        api_token: utils.auth.getLoginUser().api_token
    });
};
