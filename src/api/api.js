import fetch from '@/utils/fetch'

/**
 * 获取系统信息
 * @returns {*}
 */
export const requestSysInfo = () => {
    return fetch.get('/sysInfo')
}

/**
 * 当前账户的角色组
 * @returns {*}
 */
export const requestMyRoles = () => {
    return fetch.get('/user/myRoles')
}

/**
 * 修改个人信息
 * @param params
 * @returns {*}
 */
export const requestEditMyInfo = (params) => {
    return fetch.post('/user/update/myInfo', params)
}

