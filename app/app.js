var app = angular.module('todo', []);
app.controller('TodoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {

    // $scope.todos = [];
    // $scope.addTodoItem = function () {
    //     todoFactory.addItem($scope.todoItem);
    //     $scope.todos = todoFactory.getTodos();


    //     $scope.todoItem = '';
    // };
    // $scope.removeTodoItem = function (index) {
    //     todoFactory.removeItem(index);
    // };
    // $scope.updateTodoItem = function (index) {
    //     todoFactory.updateItem($scope.todoItem, index)
    //     $scope.todoItem = todoFactory.gettodo(r);
    // };
    console.log(todoFactory);

    console.log(todoFactory.getTodos());
    todoFactory.addTodo('sleep');
    todoFactory.addTodo('eat');
    todoFactory.addTodo('bath');
    todoFactory.addTodo('add');
    console.log(todoFactory.getTodos());

    console.log(todoFactory.getTodos());
    todoFactory.updateTodo('run', 2);
    console.log(todoFactory.getTodos());
    console.log(todoFactory.getTodo(1));
}]);

app.factory('todoFactory', function () {
    let todos = [];

    let serviceObj = {
        addTodo: function (todo) {
            todos.push(todo);
        },
        getTodos: function () {
            return todos;
        },
        getTodo: function (index) {
            return todos[index];
        },
        deleteTodo: function (index) {
            todos.splice(index, 1);
        },
        updateTodo: function (newTodo, oldTodoIndex) {
            todos[oldTodoIndex] = newTodo;

        },
    }; return serviceObj;
});