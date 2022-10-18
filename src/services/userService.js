export const contactService = {
    getUser
}

const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}