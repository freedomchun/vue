import Vue from 'vue';
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import BingPlugin from './utils/BingPlugin'
// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);


Vue.use(ElementUI)
Vue.use(BingPlugin)



AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});


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
    render: h => h(App)
})
