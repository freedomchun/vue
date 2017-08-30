import {
    getCategorys,
    getArticles,
    getArticle,
    deleteArticles,
    updateArticle,
    createArticle,
    uploadImages
} from '@/api/web'

const article = {
    state: {
        categorys: [],
        categorys_level: [],
        articles: [],
        loading: {
            category: false,
            article: false,
            del: false,
            edit: false,
        },
        op: {
            title: null,
            currentId: null,
            multipleSelection: [],
        },
        props: {
            label: 'title',
            children: 'children'
        },
        pagination: {
            current_page: 1,
            per_page: 15,
            total: 0,
        },
        currentArticle: {
            title: '',
            keywords: '',
            description: '',
            article_data: {
                content: ''
            }
        },
        img_files: [],
    },
    mutations: {
        setArticlePagination(state, pagination) {
            state.pagination.current_page = pagination.current_page
            state.pagination.total = pagination.total
        },
        save_categorys(state, categorys) {
            state.categorys = categorys
        },
        save_categorys_level(state, categorys) {
            state.categorys_level = categorys
        },
        save_articles(state, articles) {
            state.articles = articles
        },
        save_currentArticle(state, article) {
            if (article.article_data === null) {
                let append = {article_data: {content: ''}}
                Object.assign(article, append)
            }
            state.currentArticle = article
        },
        clear_currentArticle(state) {
            state.currentArticle = {
                category_id: null,
                title: '',
                keywords: '',
                description: '',
                article_data: {
                    content: ''
                }
            }
        },
        save_currentId(state, id) {
            state.op.currentId = id
        },
        save_multiple(state, arr) {
            state.op.multipleSelection = arr
        }
    },
    actions: {
        get_categorys({state, commit}) {
            state.loading.category = true
            getCategorys({tree: true}).then(rs => {
                commit('save_categorys', rs.data)
                state.loading.category = false
            }).catch(err => {
                state.loading.category = false
            })
        },
        get_categorys_level({state, commit}) {
            getCategorys().then(rs => {
                commit('save_categorys_level', rs.data)
            }).catch(() => {
            })
        },
        get_articles({state, commit}) {
            state.loading.article = true
            let params = {
                category_id: state.op.currentId,
                title: state.op.title,
                page: state.pagination.current_page,
                per_page: state.pagination.per_page
            }
            getArticles(params).then(rs => {
                commit('save_articles', rs.data.data)
                commit('setArticlePagination', rs.data)
                state.loading.article = false
            }).catch(err => {
                state.loading.article = false
            })
        },
        get_article({state, commit}, id) {
            getArticle(id).then(rs => {
                commit('save_currentArticle', rs.data)
            }).catch(() => {
            })
        },
        delete_articles({state, dispatch}) {
            return new Promise((resolve, reject) => {
                let ids = state.op.multipleSelection.map(item => item.id)
                state.loading.del = true
                deleteArticles(ids).then(rs => {
                    state.loading.del = false
                    dispatch('get_articles')
                    resolve(rs)
                }).catch(err => {
                    state.loading.del = false
                    reject(err)
                })
            })
        },
        createArticle({state}) {
            return new Promise((resolve, reject) => {
                state.loading.edit = true
                createArticle(state.currentArticle).then(rs => {
                    state.loading.edit = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.edit = false
                    reject(err)
                })
            })
        },
        updateArticle({state}) {
            return new Promise((resolve, reject) => {
                state.loading.edit = true
                updateArticle(state.currentArticle).then(rs => {
                    state.loading.edit = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.edit = false
                    reject(err)
                })
            })
        },
        upload_images({state}) {
            let formdata = new FormData();
            for (let i in state.img_files) {
                formdata.append(i, this.img_files[i]);
            }
            uploadImages(formdata).then(rs => {
                console.log(rs)
            }).catch(() => {
            
            })
        }
    }
}

export default article