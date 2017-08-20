import fetch from '@/utils/fetch'
import {getToken} from '@/utils/auth'

export function login(params) {
    return fetch.post('/login', params);
}

export function logout() {
    return fetch.post('/logout', {api_token: getToken()});
}

export const requestMyRoles = () => {
    return fetch.get('/user/myRoles')
}

export const requestEditMyInfo = (params) => {
    return fetch.post('/user/update/myInfo', params)
}



