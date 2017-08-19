import {login, logout} from '@/api/login';
import * as Auth from '@/utils/auth';

const auth = {

    mutations: {
        saveLoginUser(state, resData) {
            Auth.setToken(resData.userInfo.api_token);
            Auth.setLoginUser(resData.userInfo);
            Auth.setUserPermissions(resData.permissions);
        },
        removeLoginInfo(state) {
            Auth.removeToken();
            Auth.removeLoginUser();
            Auth.removeUserPermissions();
        }
    },
    getters: {
        token() {
            return Auth.getToken();
        },
        loginUser() {
            return Auth.getLoginUser();
        },
        userPermissions() {
            return Auth.getUserPermissions();
        }
    },
    actions: {
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(rs => {
                    commit('saveLoginUser', rs.data);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        logOut({commit, state}) {
            return new Promise((resolve, reject) => {
                commit('removeLoginInfo');
                resolve();
            })
        }
    }
}

export default auth