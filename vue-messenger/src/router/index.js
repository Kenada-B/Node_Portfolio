import Vue from 'vue'
import Router from 'vue-router'
import friendList from '../components/friend-list'
import messageroomList from '../components/messageroom-list'
import commScreen from '../components/comm-screen'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: {
            name: 'friend-list'
        }
    }, {
        path: '/vue-socket.io',
        redirect: {
            name: 'friend-list'
        }
    }, {
        path: '/friend-list',
        name: 'friend-list',
        component: friendList,
    }, {
        path: '/messageroom-list',
        name: 'messageroom-list',
        component: messageroomList,
    }, {
        path: '/comm-screen/:commName',
        name: 'comm-screen',
        component: commScreen,
    }]
})