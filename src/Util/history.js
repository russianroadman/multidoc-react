export var history = [];

export const updateHistory = () => {
    let storage = JSON.parse(localStorage.getItem('history'))
    if (storage !== null) history = storage
}

updateHistory();

export const addToHistory = (item) => {
    let storage = JSON.parse(localStorage.getItem('history'))
    storage.push(item)
    localStorage.setItem('history', JSON.stringify(storage))
}