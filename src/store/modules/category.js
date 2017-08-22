import {getCategorys, createCategory, updateCategory, deleteCategory} from '@/api/web'

const category = {
    state: {
        list: [],
        loading: {
            list: false,
            add: false,
            edit: false,
        },
        op: {
            title: null,
            showAdd: false,
            showEdit: false,
        },
        current: {
            id: null,
            title: null,
            parent_id: 0,
            is_show: true,
            seo_title: null,
            seo_keywords: null,
            seo_description: null,
        },
    },
    mutations: {
        save_list(state, categorys) {
            state.list = categorys
        },
        save_current(state, category) {
            for (let key in state.current) {
                state.current[key] = category[key]
            }
        },
        clear_current(state) {
            state.current = {
                title: null,
                parent_id: 0,
                is_show: true,
                seo_title: null,
                seo_keywords: null,
                seo_description: null
            }
        }
    },
    actions: {
        getList({state, commit}) {
            state.loading.list = true
            getCategorys({title: state.op.title}).then(rs => {
                commit('save_list', rs.data)
                state.loading.list = false
            }).catch(err => {
                state.loading.list = false
            })
        },
        addCategory({state, dispatch}) {
            return new Promise((resolve, reject) => {
                state.loading.add = true
                createCategory(state.current).then(rs => {
                    state.loading.add = false
                    state.op.showAdd = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.add = false
                    reject(err)
                })
            })
        },
        editCategory({state}) {
            return new Promise((resolve, reject) => {
                state.loading.edit = true
                updateCategory(state.current).then(rs => {
                    state.loading.edit = false
                    state.op.showEdit = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.edit = false
                    reject(err)
                })
            })
        },
        delCategory({state, dispatch}, id) {
            return new Promise((resolve, reject) => {
                deleteCategory(id).then(rs => {
                    resolve(rs)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default category