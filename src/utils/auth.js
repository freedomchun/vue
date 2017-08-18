/**
 * 获取token
 * @returns token
 */
export function getToken() {
    return sessionStorage.getItem('token');
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
    sessionStorage.setItem('token', token)
}

/**
 * 移除token
 */
export function removeToken() {
    sessionStorage.removeItem('token')
}

/**
 * 获取User
 * @returns token
 */
export function getLoginUser() {
    return JSON.parse(sessionStorage.getItem('loginUser'));
}

/**
 * 设置User
 * @param user
 */
export function setLoginUser(user) {
    sessionStorage.setItem('loginUser', JSON.stringify(user))
}

/**
 * 移除User
 */
export function removeLoginUser() {
    sessionStorage.removeItem('loginUser')
}

/**
 * 设置权限
 * @param permissions
 */
export function setUserPermissions(permissions) {
    sessionStorage.setItem('permissions', JSON.stringify(permissions))
}

/**
 * 移除权限
 */
export function removeUserPermissions() {
    sessionStorage.removeItem('permissions')
}

/**
 * 获取User权限
 * @returns permissions
 */
export function getUserPermissions() {
    let ps = sessionStorage.getItem('permissions');
    return ps === null ? [] : JSON.parse(ps);
}

/**
 * 设置登录用户的路由菜单
 * @param allRoutes
 * @returns userRoutes
 */
export function setLoginUserRouter(allRoutes) {
    let permissions = getUserPermissions();
    return childrenRouter(allRoutes, permissions);
}

/**
 * 避免无限递归时重新读取权限
 * @param routes
 * @param permissions
 * @returns routes.children
 */
function childrenRouter(routes, permissions) {
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

/**
 * 检查权限
 * @desc 例如 hasUserPermissions(['view.users', 'create.user'], true)
 * @param name String||Array 权限名
 * @param is_force 完全匹配
 * @returns {boolean}
 */
export function hasUserPermissions(name, is_force = true) {
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
}
