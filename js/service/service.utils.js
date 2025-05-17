

function saveToLocalStorage(key,arr) {
    const strArr = JSON.stringify(arr)
    localStorage.setItem(key,strArr)
}

function loadFromLocalStorage(key) {
    const strArr = localStorage.getItem(key)
    return JSON.parse(strArr)
}

function clearCashEvery(sec) {
    const time = 1000 * sec
    setInterval(() => localStorage.clear(),time) 
}

