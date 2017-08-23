import {getCategorys, getArticles} from '@/api/web'

const article = {
    state: {
        categorys: [],
        articles: [],
        loading: {
            category: false,
            article: false,
        },
        op: {
            title: null,
            multipleSelection: [],
        },
        props: {
            label: 'title',
            children: 'children'
        },
        currentCategory: null,
    },
    mutations: {
        save_categorys(state, categorys) {
            state.categorys = categorys
        },
        save_articles(state, articles) {
            state.articles = articles
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
            getArticles().then(rs => {
                commit('save_articles', rs.data.data)
                state.loading.article = false
            }).catch(err => {
                state.loading.article = false
            })
        },
    }
}

export default article