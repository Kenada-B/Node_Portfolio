import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        userlist: ['U s e r 1', 'U s e r 2']
    }
})

export default store