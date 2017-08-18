import fetch from '@/utils/fetch'
import {getToken} from '@/utils/auth'

export function login(params) {
    return fetch.post('/login', params);
}

export function logout() {
    return fetch.post('/logout', {api_token: getToken()});
}



