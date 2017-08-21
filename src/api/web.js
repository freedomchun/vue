import fetch from '@/utils/fetch'

/**
 * 查询信息
 * @returns {*}
 */
export function getWebInfo() {
    return fetch.get('/webInfo')
}

/**
 * 修改网站信息
 * @param params
 * @returns {*}
 */
export function updateWebInfo(params) {
    return fetch.patch('/webInfo', params)
}