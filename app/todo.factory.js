
app.factory('todoFactory', function () {
    let todos = [];

    let addTodo = function (addContent) {

        let todo = {
            id: todos.length,
            isComplete: false,
            content: addContent
        };
        todos.push(todo);
    };
    let getTodos = function () {
        return todos;
    };
    let getTodo = function (index) {
        return todos[index];
    };

    let deleteTodo = function (index) {
        todos.splice(index, 1);
    };

    let updateTodo = function (index, newContent) {
        todos[index].content = newContent;
    };

    let deleteAll = function () {
        todos = [];
    };

    let checkAll = function () {
        for (let count = 0; count < todos.length; count++) {
            todos[count].isComplete = true;
        }
    };

    let checkTodo = function (index) {
        if (todos[index].isComplete === false) {
            todos[index].isComplete = true;
        }
        else {
            todos[index].isComplete = false;
        }

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

});

