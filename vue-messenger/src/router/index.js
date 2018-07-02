import Vue from 'vue'
import Router from 'vue-router'
import friendList from '../components/friend-list'
import sendMessage from '../components/send-message'
import messageroomList from '../components/messageroom-list'
import enterMessageroom from '../components/enter-messageroom'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: {
            name: 'friend-list'
        }
    }, {
        path: '/friend-list',
        name: 'friend-list',
        component: friendList,
        children: [{
            path: '/send-message',
            name: 'send-message',
            component: sendMessage,
        }]
    }, {
        path: '/messageroom-list',
        name: 'messageroom-list',
        component: messageroomList,
        children: [{
            path: '/enter-messageroom',
            name: 'enter-messageroom',
            component: enterMessageroom,
        }]
    }]
})