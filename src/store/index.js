import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import pic from './modules/pic';
import web from './modules/web';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        pic,
        web
    }
})

export default store