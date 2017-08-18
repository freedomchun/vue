import fetch from '@/utils/fetch'

/**
 * 获取附件管理目录
 * @returns {*}
 */
export const requestAttDirs = () => {
    return fetch.get('/attDir')
}

/**
 * 获取附件列表
 * @param otherParams page:页码, pageSize:数量
 * @returns {*}
 */
export const requestAttachments = (otherParams = {}) => {
    return fetch.get('/attachment', {
        params: otherParams
    })
}

/**
 * 删除附件
 * @param ids
 * @returns {*}
 */
export const requestDeleteAttachment = (ids) => {
    return fetch.delete('/attachment', {
        params: {ids}
    })
}

/**
 * 创建附件目录
 * @param params
 * @returns {*}
 */
export const requestCreateDir = (params) => {
    return fetch.post('/attDir', params)
}
