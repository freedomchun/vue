import {getCategorys, getArticles, deleteArticles} from '@/api/web'

const article = {
    state: {
        categorys: [],
        articles: [],
        loading: {
            category: false,
            article: false,
            del: false,
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
            per_page: 16,
            total: 0,
        },
    },
    mutations: {
        setPagination(state, pagination) {
            state.pagination.current_page = pagination.current_page
            state.pagination.total = pagination.total
        },
        save_categorys(state, categorys) {
            state.categorys = categorys
        },
        save_articles(state, articles) {
            state.articles = articles
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
                commit('setPagination', rs.data)
                state.loading.article = false
            }).catch(err => {
                state.loading.article = false
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
            
        }
    }
}

export default article