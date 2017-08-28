import fetch from '@/utils/fetch'

/**
 * 全球城市
 * @returns {*}
 */
export const getLoc = params => {
    return fetch.get('/loc', {
        params
    })
}
