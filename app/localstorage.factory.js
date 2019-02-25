app.factory('localStorageFactory', function () {

    function saveToLocalStorage(list) {
        let listString = JSON.stringify(list);
        localStorage.setItem('list', listString);
    }

    function getFromLocalStorage() {
        let listString = localStorage.getItem('list');

        if (!listString) return [];

        return JSON.parse(listString);
    }

    return {
        saveToLocalStorage: saveToLocalStorage,
        getFromLocalStorage: getFromLocalStorage
    };
});

