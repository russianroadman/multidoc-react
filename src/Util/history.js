const h = () => {
    return window.localStorage.getItem('history')
}

const sh = (item) => {
    window.localStorage.setItem('history', JSON.stringify(item, replacer))
}

export const addDocumentToHistory = (title, id) => {
    let history = getHistory()
    history.set(id, title)
    sh(history)
}

export const getHistory = () => {
    const res = h()
    if (res === null) return new Map()
    return JSON.parse(res, reviver)
}

function replacer(key, value) {
    if(value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}
function reviver(key, value) {
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}
