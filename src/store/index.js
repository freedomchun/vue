import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import pic from './modules/pic';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        pic,
    }
})

export default store