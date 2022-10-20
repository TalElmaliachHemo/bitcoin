import { userService } from '../../services/user.service.js'
import { utilService } from '../../services/util.service.js'

export default {
    state: {
        loggedinUser: userService.getUser(),
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = user
        },
        transferFunds(state, { amount, contact }) {
            state.loggedinUser.balance -= amount

            const transaction = {
                id: utilService.makeId(),
                toId: contact._id,
                to: contact.name,
                at: Date.now(),
                amount
            }

            state.loggedinUser.transactions.unshift(transaction)
        },
        logout(state) {
            state.loggedinUser = {}
        }
    },
    actions: {
        async signupUser({ commit }, { username }) {
            const user = await userService.loginSignup(username)
            commit({ type: 'setLoggedinUser', user })
        },
        async transferFunds({ commit }, { amount, contact }) {
            await userService.transferFunds(amount, contact)
            commit({ type: 'transferFunds', amount, contact })
        },
        async logout({ commit }) {
            await userService.logout()
            commit({ type: 'logout'})
        }
    },
    getters: {
        loggedinUser(state) { return state.loggedinUser }
    }
}