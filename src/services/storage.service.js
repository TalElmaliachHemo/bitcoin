export const storageService = {
    save: saveToStorage,
    load: loadFromStorage,
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}