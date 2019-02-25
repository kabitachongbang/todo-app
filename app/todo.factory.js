
app.factory('todoFactory', ['localStorageFactory', function (localStorageFactory) {
    let todos = localStorageFactory.getFromLocalStorage();

    let addTodo = function (addContent) {
        let todo = {
            id: todos.length,
            isComplete: false,
            content: addContent
        };
        todos.push(todo);
        localStorageFactory.saveToLocalStorage(todos);
    };
    let getTodos = function () {
        return todos;
    };
    let getTodo = function (index) {
        return todos[index];
    };

    let deleteTodo = function (index) {
        todos.splice(index, 1);

        localStorageFactory.saveToLocalStorage(todos);
    };

    let updateTodo = function (index, newContent) {
        todos[index].content = newContent;

        localStorageFactory.saveToLocalStorage(todos);
    };

    let deleteAll = function () {
        todos = [];
        localStorageFactory.saveToLocalStorage(todos);
    };

    let checkAll = function () {
        for (let count = 0; count < todos.length; count++) {
            todos[count].isComplete = true;
        }

        localStorageFactory.saveToLocalStorage(todos);
    };

    let checkTodo = function (index) {
        if (todos[index].isComplete === false) {
            todos[index].isComplete = true;
        }
        else {
            todos[index].isComplete = false;
        }

        localStorageFactory.saveToLocalStorage(todos);
    };

    return {
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo,
        deleteAll: deleteAll,
        checkAll: checkAll,
        checkTodo: checkTodo,
        getTodos: getTodos,
        getTodo: getTodo
    };


}]);

