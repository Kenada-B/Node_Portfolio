import socketCli from 'socket.io-client'

export default {
    state: {
        id: 'maru',
        socket: ''
    },
    mutations: {
        "connect": (state, payload) => {
            state.socket = payload.socket;
        }
    },
    actions: {
        "connect": (store, payload) => {
            var io = socketCli('https://192.168.0.11:3001', { 'forceNew': true });
            payload.socket = io;
            store.commit("connect", payload);
        }
    }
}