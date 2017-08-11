/**
 * 获取登录用户
 * @returns loginUser
 */
export const getLoginUser = () => {
    return JSON.parse(sessionStorage.getItem('loginUser'));
};

/**
 * 设置登录用户信息
 * @param user
 */
export const setLoginUser = (resData) => {
    // 设置权限
    sessionStorage.setItem('permissions', JSON.stringify(resData.permissions));
    // 设置登录用户
    sessionStorage.setItem('loginUser', JSON.stringify(resData.userInfo));
};

/**
 * 移除登录用户信息
 */
export const removeLoginUser = () => {
    // 移除权限
    sessionStorage.removeItem('permissions');
    // 移除登录用户
    sessionStorage.removeItem('loginUser');
};

/**
 * 检查权限
 * @desc 例如 hasPermissions(['view.users', 'create.user'], true)
 * @param name String||Array 权限名
 * @param is_force 完全匹配
 * @returns {boolean}
 */
export const hasPermissions = (name, is_force = true) => {
    let ps = sessionStorage.getItem('permissions');
    if (ps === null) {
        return false;
    }
    let data = JSON.parse(ps).map(item => item.slug);
    
    if (typeof name === 'string') {
        return data.includes(name);
    } else if (name instanceof Array) {
        return is_force === true ? name.every(item => data.includes(item)) : name.some(item => data.includes(item));
    }
    
    return false;
};

/**
 * 获取登录用户的权限
 */
export const getUserPermissions = () => {
    return JSON.parse(sessionStorage.getItem('permissions'));
};
