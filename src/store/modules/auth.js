import {login, logout, requestEditMyInfo, requestMyRoles} from '@/api/login'
import {
    setToken,
    setLoginUser,
    setUserPermissions,
    removeToken,
    removeLoginUser,
    removeUserPermissions,
    getLoginUser,
    getToken
} from '@/utils/auth'

const auth = {
    state: {
        pwdInfo: {
            oldPassword: '',
            newPassword: '',
            newPassword_confirmation: '',
        },
        roles: [],
        loading: {
            pwd: false,
        },
        upload: {
            headers: {
                Accept: 'application/json, text/plain, */*',
                Authorization: 'Bearer ' + getToken()
            },
            url: `${process.env.BASE_API}/user/update/myInfo`,
        }
    },
    mutations: {
        saveToken(state, token) {
            setToken(token)
        },
        saveLoginUser(state, user) {
            setLoginUser(user)
        },
        savePermissions(state, permissions) {
            setUserPermissions(permissions)
        },
        removeLoginInfo(state) {
            removeToken()
            removeLoginUser()
            removeUserPermissions()
        }
    },
    getters: {
        loginUser() {
            return getLoginUser()
        }
    },
    actions: {
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(rs => {
                    commit('saveToken', rs.data.userInfo.api_token)
                    commit('saveLoginUser', rs.data.userInfo)
                    commit('savePermissions', rs.data.permissions)
                    resolve(rs)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logOut({commit, state}) {
            return new Promise((resolve, reject) => {
                commit('removeLoginInfo')
                resolve()
            })
        },
        updatePassword({commit, state}) {
            return new Promise((resolve, reject) => {
                state.loading.pwd = true
                requestEditMyInfo(state.pwdInfo).then(rs => {
                    state.loading.pwd = false
                    resolve(rs)
                }).catch(error => {
                    state.loading.pwd = false
                    reject(error)
                })
            })
        },
        getMyRoles({state}) {
            requestMyRoles().then(rs => {
                state.roles = rs.data
            })
        },
    }
}

export default auth