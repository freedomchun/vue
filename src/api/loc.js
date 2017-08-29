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

/**
 * 目的地
 * @param params
 */
export const getMdd = params => {
    return fetch.get('/mdd', {
        params
    })
}


/**
 * 创建目的地
 * @param params
 */
export const createMdd = params => {
    return fetch.post('/mdd', params)
}

/**
 * 删除目的地
 * @param id
 * @returns {AxiosPromise | *}
 */
export const deleteMdd = id => {
    return fetch.delete(`/mdd/${id}`)
}

/**
 * 修改目的地
 * @param mdd
 * @returns {AxiosPromise | *}
 */
export const updateMdd = mdd => {
    return fetch.patch(`/mdd/${mdd.id}`, mdd)
}