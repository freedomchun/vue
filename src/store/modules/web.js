import {getWebInfo, updateWebInfo} from '@/api/web'

const web = {
    state: {
        info: {
            name: null,
            keywords: null,
            description: null,
            copy: null,
            code: null,
            code_pc: null,
            code_mobile: null,
        },
        loading: {
            edit: false,
            info: false,
        }
    },
    actions: {
        updateInfo({state}) {
            return new Promise((resolve, reject) => {
                state.loading.edit = true
                updateWebInfo(state.info).then(rs => {
                    state.loading.edit = false
                    resolve(rs)
                }).catch(err => {
                    state.loading.edit = false
                    reject(err)
                })
            })
        },
        getInfo({state, commit}) {
            state.loading.info = true
            getWebInfo().then(rs => {
                if (rs.data) {
                    state.info = rs.data
                }
                state.loading.info = false
            }).catch(err => {
                state.loading.info = false
            })
        }
    }
}

export default web