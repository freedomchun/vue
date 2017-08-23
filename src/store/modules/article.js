import {getCategorys} from '@/api/web'

const article = {
    state: {
        categorys: [],
        loading: {
            category: false,
            add: false,
            edit: false,
        },
        op: {
            title: null,
        },
        props:{
        	label: 'title',
        	children: 'children'
        }
    },
    mutations: {
        save_categorys(state, categorys) {
            state.categorys = categorys
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
        }
    }
}

export default article