import * as api from '@/api/loc'

const mdd = {
    state: {
        list: [],
        pagination: {
            current_page: 1,
            per_page: 15,
            total: 0,
        },
        op: {
            show: false,
            current: {
                cascader: [],
                title: null,
                thumb: null,
                description: null,
                sort: 0,
                is_show: true,
            },
            title: null,
        },
        loading: {
            list: false,
            current: false,
        }
    },
    mutations: {
        setPagination(state, pagination) {
            state.pagination.current_page = pagination.current_page
            state.pagination.total = pagination.total
        },
        setMddList(state, data) {
            state.list = data
        },
        clear_current_mdd(state) {
            state.op.current = {cascader: [], title: null, thumb: null, description: null, sort: 0, is_show: true}
        }
    },
    actions: {
        get_mddList({state, commit}) {
            state.loading.list = true
            let params = {
                page: state.pagination.current_page,
                per_page: state.pagination.per_page,
                title: state.op.title
            }
            api.getMdd(params).then(rs => {
                commit('setPagination', rs.data)
                commit('setMddList', rs.data.data)
                state.loading.list = false
            }).catch(() => {
                state.loading.list = false
            })
        },
        submit_mdd({state, commit}) {
            return new Promise((resolve, reject) => {
                state.loading.current = true
                let fn = state.op.current.id ? 'updateMdd' : 'createMdd'
                api[fn](state.op.current).then(rs => {
                    state.loading.current = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.current = false
                    reject(err)
                })
            })
        },
        delete_mdd({state, commit}, mdd) {
            return new Promise((resolve, reject) => {
                api.deleteMdd(mdd.id).then(rs => {
                    resolve(rs)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default mdd