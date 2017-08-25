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

/**
 * 获取栏目
 * @param params
 */
export function getCategorys(params = null) {
    return fetch.get('/category', {
        params
    })
}

/**
 * 创建栏目
 * @param params
 * @returns {AxiosPromise | *}
 */
export function createCategory(params = null) {
    return fetch.post('/category', params)
}

/**
 * 修改栏目
 * @param category
 * @returns {*|AxiosPromise}
 */
export function updateCategory(category) {
    return fetch.patch(`/category/${category.id}`, category)
}

/**
 * 删除栏目
 * @param id
 */
export function deleteCategory(id) {
    return fetch.delete(`/category/${id}`)
}

/**
 * 获取文章列表
 * @param params
 */
export function getArticles(params = null) {
    return fetch.get('/article', {
        params
    })
}

/**
 * 获取文章
 * @param params
 */
export function getArticle(id) {
    return fetch.get(`/article/${id}`)
}

/**
 * 删除文章
 * @param ids
 */
export function deleteArticles(ids = []) {
    return fetch.delete('/article', {
        params: {
            ids
        }
    })
}

/**
 * 修改文章
 * @param params
 */
export function updateArticles(params) {
    return fetch.patch(`/article/${params.id}`, params)
}

/**
 * 上传图片
 * @param formdata
 * @returns {AxiosPromise | *}
 */
export function uploadImages(formdata) {
    return fetch.post('/upload', {
        headers: {'Content-Type': 'multipart/form-data'},
        data: formdata,
    })
}
