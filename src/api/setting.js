import fetch from '@/utils/fetch'

/**
 * 获取角色列表
 * @param slug
 * @returns {*}
 */
export const requestRoles = (slug = null) => {
    return fetch.get('/role', {params: {slug}})
}

/**
 * 创建一个角色
 * @param params
 * @returns {*}
 */
export const requestCreateRole = (params) => {
    return fetch.post('/role', params)
}

/**
 * 修改一个角色
 * @param params
 * @returns {*}
 */
export const requestEditRole = (params) => {
    return fetch.patch(`/role/${params.id}`, params)
}

/**
 * 删除一个角色
 * @param role
 * @returns {*}
 */
export const requestDeleteRole = (role) => {
    return fetch.delete(`/role/${role}`)
}

/**
 * 获取权限列表
 * @param slug
 * @returns {*}
 */
export const requestPermissions = (slug = null) => {
    return fetch.get(`/permission`, {slug})
}

/**
 * 创建权限
 * @param params
 * @returns {*}
 */
export const requestCreatePermission = (params) => {
    return fetch.post(`/permission`, params)
}

/**
 * 修改权限
 * @param params
 * @returns {*}
 */
export const requestEditPermission = (params) => {
    return fetch.patch(`/permission/${params.id}`, params)
}

/**
 * 删除权限
 * @param permission
 * @returns {*}
 */
export const requestDeletePermission = (permission) => {
    return fetch.delete(`/permission/${permission}`)
}

/**
 * 角色同步权限
 * @param role
 * @param permissions array ids
 * @returns {*}
 */
export const requestRoleSyncPermissions = (role, permissions) => {
    return fetch.patch(`/role/syncPermissions/${role}`, permissions)
}

/**
 * 获得角色权限列表
 * @param role
 * @returns {*}
 */
export const requestRolePermissions = (role) => {
    return fetch.get(`/role/permissions/${role}`)
}

/**
 * 获得账户列表
 * @param params page:页码, per_page:每页数量
 * @returns {*}
 */
export const requestUsers = (params = {}) => {
    return fetch.get('/user', {
        params
    })
}

/**
 * 删除账户
 * @param user
 * @returns {*}
 */
export const requestDeleteUser = (user) => {
    return fetch.delete(`/user/${user}`)
}

/**
 * 创建账户
 * @param params
 * @returns {*}
 */
export const requestCreateUser = (params) => {
    return fetch.post('/user', params)
}

/**
 * 编辑账户
 * @param user
 * @param params
 * @returns {*}
 */
export const requestEditUser = (user, params) => {
    return fetch.patch(`/user/${user}`, params)
}

/**
 * 同步账户角色组
 * @param user
 * @param roles
 * @returns {*}
 */
export const requestSyncUserRoles = (user, roles) => {
    return fetch.patch(`/user/syncRoles/${user}`, roles)
}

/**
 * 重置密码
 * @param user
 * @returns {*}
 */
export const requestResetPassword = (user) => {
    return fetch.patch(`/user/resetPassword/${user}`)
}

/**
 * 当前账户的角色组
 * @returns {*}
 */
export const requestMyRoles = () => {
    return fetch.get('/user/myRoles')
}
