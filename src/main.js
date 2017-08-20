import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import BingPlugin from './utils/BingPlugin'

Vue.use(ElementUI)
Vue.use(BingPlugin)

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path === '/login') {
        store.dispatch('logOut')
    }
    let token = sessionStorage.getItem('token')
    if (!token && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
})

router.afterEach(transition => {
    NProgress.done()
})

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
