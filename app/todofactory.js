app.factory('todoService', ['localStorageTodo', function (localStorageTodo) {
    let todos = localStorageTodo.loadFromLocalStorage();
    let addItem = function (addContent) {
        let todo = {
            id: todos.length,
            isComplete: false,
            content: addContent
        };
        todos.push(todo);
        localStorageTodo.saveToLocalStorage(todos);
        localStorageTodo.loadFromLocalStorage(todos);
    };
    let deleteItem = function (index) {
        todos.splice(index, 1);
        localStorageTodo.saveToLocalStorage(todos);
        localStorageTodo.loadFromLocalStorage(todos);

    };
    let updateItem = function (index, newContent) {
        todos[index] = newContent;
        localStorageTodo.saveToLocalStorage(todos);
    };
    let deleteAll = function () {
        todos = [];

        localStorageTodo.saveToLocalStorage(todos);
        localStorageTodo.loadFromLocalStorage(todos);
    };
    let checkItem = function (index) {
        if (todos[index].isComplete === false) {
            todos[index].isComplete = true;
        }
        else {
            todos[index].isComplete = false;
        }
        localStorageTodo.saveToLocalStorage(todos);
        localStorageTodo.loadFromLocalStorage(todos);
    };
    let checkALL = function () {
        for (let count = 0; count < todos.length; count++) {
            todos[count].isComplete = true;
        }
        localStorageTodo.saveToLocalStorage(todos);
        localStorageTodo.loadFromLocalStorage(todos);
    };
    let getItems = function () {
        return todos;
    }
    return {
        addItem: addItem,
        checkItem: checkItem,
        getItems: getItems,
        deleteItem: deleteItem,
        deleteAll: deleteAll,
        checkALL: checkALL,
        updateItem: updateItem
    }
}]);