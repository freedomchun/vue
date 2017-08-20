import fetch from '@/utils/fetch'

/**
 * 获取系统信息
 * @returns {*}
 */
export const requestSysInfo = () => {
    return fetch.get('/sysInfo')
}
