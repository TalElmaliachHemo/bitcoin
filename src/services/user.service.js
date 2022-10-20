import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

export const userService = {
    getUser,
    loginSignup,
    transferFunds,
    getTransactions
}

function getUser() {
    return storageService.load('loggedinUser' || {})
}

function transferFunds() {

}

function getTransactions() {

}

function loginSignup(username) {
    const users = storageService.load('user') || []
    const userIdx = users.findIndex(user => user.name === username)

    if (userIdx !== -1) {
        const user = users[userIdx]
        storageService.save('loggedinUser', user)
        return user
    }

    const user = {
        _id: utilService.makeId(),
        name: username,
        balance: 100,
        transactions: [
            {
                id: utilService.makeId(),
                toId: "7Qhlcosi6k",
                to: "Roni Cohen",
                at: Date.now(),
                amount: 10
            }]
    }

    users.push(user)
    storageService.save('loggedinUser', user)
    storageService.save('user', users)
    return user
}