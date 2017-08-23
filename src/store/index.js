import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import pic from './modules/pic';
import web from './modules/web';
import category from './modules/category'
import article from './modules/article'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        pic,
        web,
        category,
        article,
    }
})

export default store