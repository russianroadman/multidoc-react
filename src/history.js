export var history = [];

export const updateHistory = () => {
    history = JSON.parse(localStorage.getItem('history'))
}

updateHistory();

export const addToHistory = (item) => {
    let storage = JSON.parse(localStorage.getItem('history'))
    storage.push(item)
    localStorage.setItem('history', JSON.stringify(storage))
}