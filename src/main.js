import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import api from './api'
import utils from './utils'

window.api = api
window.utils = utils

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
