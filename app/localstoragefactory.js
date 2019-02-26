app.factory('localStorageTodo', function () {
    let saveToLocalStorage = function (list) {
        let listString = JSON.stringify(list);
        localStorage.setItem('list', listString);
        console.log(listString);
    };
    let loadFromLocalStorage = function () {
        let listString = localStorage.getItem('list');
        if (!listString) {
            return [];
        } else {
            return JSON.parse(listString);
        }
    };
    return {
        saveToLocalStorage: saveToLocalStorage,
        loadFromLocalStorage: loadFromLocalStorage
    }
});
