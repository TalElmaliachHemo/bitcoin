import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

export const userService = {
    getUser,
    loginSignup,
    logout,
    transferFunds,
}

function getUser() {
    return storageService.load('loggedinUser') || {}
}

function transferFunds(amount, contact) {
    const user = getUser()
    user.balance -= amount

    const transaction = {
        id: utilService.makeId(),
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }

    user.transactions.unshift(transaction)
    storageService.save('loggedinUser', user)

    const userId = user._id
    const users = storageService.load('user')
    const userIdx = users.findIndex(user => user._id === userId)
    users[userIdx] = { ...user }
    storageService.save('user', users)
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
        transactions: []
    }

    users.push(user)
    storageService.save('loggedinUser', user)
    storageService.save('user', users)
    return user
}

function logout() {
    storageService.save('loggedinUser', null)
}