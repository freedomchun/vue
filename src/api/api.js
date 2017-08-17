import axios from 'axios'
import utils from '../utils'

/**
 * 请求地址
 * @type {string}
 */
export const base = 'http://192.168.0.110/api/admin';

/**
 * 用户token
 */
export const getUserToken = () => {
    return utils.auth.getLoginUser() ? utils.auth.getLoginUser().api_token : null;
};

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
        api_token: this.getUserToken()
    });
};

/**
 * 获取系统信息
 * @returns {*}
 */
export const requestSysInfo = () => {
    return axios.get(`${base}/sysInfo`, {
        params: {
            api_token: this.getUserToken()
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
            api_token: this.getUserToken(),
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
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.post(`${base}/role`, params);
};


/**
 * 修改一个角色
 * @param params
 * @returns {*}
 */
export const requestEditRole = (params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
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
            api_token: this.getUserToken()
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
            api_token: this.getUserToken(),
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
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.post(`${base}/permission`, params);
};

/**
 * 修改权限
 * @param params
 * @returns {*}
 */
export const requestEditPermission = (params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
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
            api_token: this.getUserToken()
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
    let params = Object.assign({api_token: this.getUserToken()}, {permissions});
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
            api_token: this.getUserToken()
        }
    });
};

/**
 * 获得账户列表
 * @param otherParams page:页码, pageSize:数量
 * @returns {*}
 */
export const requestUsers = (otherParams = {}) => {
    let params = Object.assign({api_token: this.getUserToken()}, otherParams);
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
            api_token: this.getUserToken()
        }
    });
};

/**
 * 创建账户
 * @param params
 * @returns {*}
 */
export const requestCreateUser = (params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.post(`${base}/user`, params);
};

/**
 * 编辑账户
 * @param user
 * @param permissions
 * @returns {*}
 */
export const requestEditUser = (user, params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.patch(`${base}/user/${user}`, params);
};

/**
 * 同步账户角色组
 * @param user
 * @param roles
 * @returns {*}
 */
export const requestSyncUserRoles = (user, roles) => {
    let params = Object.assign({api_token: this.getUserToken()}, {roles});
    return axios.patch(`${base}/user/syncRoles/${user}`, params);
};

/**
 * 重置密码
 * @param user
 * @returns {*}
 */
export const requestResetPassword = (user) => {
    return axios.patch(`${base}/user/resetPassword/${user}`, {
        api_token: this.getUserToken()
    });
};

/**
 * 当前账户的角色组
 * @returns {*}
 */
export const requestMyRoles = () => {
    return axios.get(`${base}/user/myRoles`, {
        params: {
            api_token: this.getUserToken()
        }
    });
};

/**
 * 修改个人信息
 * @param params
 * @returns {*}
 */
export const requestEditMyInfo = (params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.patch(`${base}/user/update/myInfo`, params);
};

/**
 * 获取附件管理目录
 * @returns {*}
 */
export const requestAttDirs = () => {
    return axios.get(`${base}/attDir`, {
        params: {
            api_token: this.getUserToken(),
        }
    });
};

/**
 * 获取附件列表
 * @param otherParams page:页码, pageSize:数量
 * @returns {*}
 */
export const requestAttachments = (otherParams = {}) => {
    let params = Object.assign({api_token: this.getUserToken()}, otherParams);
    return axios.get(`${base}/attachment`, {params});
};

/**
 * 删除附件
 * @param attachment
 * @returns {*}
 */
export const requestDeleteAttachment = (attachment) => {
    return axios.delete(`${base}/attachment/${attachment}`, {
        params: {
            api_token: this.getUserToken()
        }
    });
};

/**
 * 创建附件目录
 * @param params
 * @returns {*}
 */
export const requestCreateDir = (params) => {
    params = Object.assign({api_token: this.getUserToken()}, params);
    return axios.post(`${base}/attDir`, params);
};
