
function store(key, any) {
    localStorage[key] = JSON.stringify(any);
    return Promise.resolve()
}

function load(key) {
    return new Promise((resolve, reject) => {
        var str = localStorage[key] || 'null';
        let value = JSON.parse(str);
        resolve(value)
    })
}

export const storageService = {
    store,
    load
}
