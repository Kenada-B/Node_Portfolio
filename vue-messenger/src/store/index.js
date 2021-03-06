import Vue from 'vue'
import Vuex from 'vuex'
import commList from './commList'
import login from './login'

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        userlist: [{
            name: 'U s e r 1',
            commid: 'user1'
        }, {
            name: 'U s e r 2',
            commid: 'user2'
        }]
    },
    modules: {
        commlist: commList,
        logininfo: login
    }
})

export default store