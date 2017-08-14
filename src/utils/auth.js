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
 * @returns permissions
 */
export const getUserPermissions = () => {
    let ps = sessionStorage.getItem('permissions');
    return ps === null ? [] : JSON.parse(ps);
};

/**
 * 设置登录用户的路由菜单
 * @param allRoutes
 * @returns userRoutes
 */
export const setLoginUserRouter = allRoutes => {
    let permissions = getUserPermissions();

    return childrenRouter(allRoutes, permissions);
}

/**
 * 避免无限递归时重新读取权限
 * @param routes
 * @param permissions
 * @returns routes.children
 */
let childrenRouter = (routes, permissions) => {
    routes.forEach((route, index) => {
        if (typeof route.slug !== 'undefined') {
            if (!permissions.map(item => item.slug).includes(route.slug)) {
                routes.splice(index, 1);
            }
        }
        if (typeof route.children !== 'undefined') {
            routes[index].children = childrenRouter(route.children, permissions);
        }
    })

    return routes;
}
