import { userService } from '../../services/user.service.js'

export default {
    state: {
        loggedinUser: userService.getUser(),
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = user
        },

    },
    actions: {
        async signupUser({ commit }, { username }) {
            const user = await userService.loginSignup(username)
            commit({ type: 'setLoggedinUser', user })
        },
    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}