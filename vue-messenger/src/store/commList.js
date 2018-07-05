export default {
    state: {
        user1: {
            name: "User1님과 대화",
            id: "user1",
            commlog: []
        },
        user2: {
            name: "User2님과 대화",
            id: "user2",
            commlog: []
        },
        everyone1: {
            name: "maru,User1,User2그룹대화",
            id: 'everyone1',
            commlog: []
        }
    },
    mutations: {
        addMessagelog(state, payload) {
            state[payload.message.roomid].commlog.push(payload.message);
        }
    }
}