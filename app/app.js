var app = angular.module('todo', []);
app.controller('TodoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.todos = todoFactory.getTodos();
    $scope.todoItem = {
        content: ''
    };
    let indexUpdate = 0;

    $scope.addTodoItem = function () {
        if ($scope.todoItem.id === undefined) {
            todoFactory.addTodo($scope.todoItem.content);
        } else {
            todoFactory.updateTodo(indexUpdate, $scope.todoItem.content);

        }
        $scope.todoItem = {};

        $scope.todos = todoFactory.getTodos();
    };

    $scope.editTodoItem = function (index) {
        $scope.todoItem = todoFactory.getTodo(index);
        indexUpdate = index;
    };
    $scope.removeTodoItem = function (index) {
        todoFactory.deleteTodo(index);
    };
    $scope.checkTodoItem = function (index) {
        todoFactory.checkTodo(index);
        $scope.todos = todoFactory.getTodos();
    };
    $scope.checkAllItems = function () {
        todoFactory.checkAll();
        $scope.todos = todoFactory.getTodos();
    };
    $scope.clearAll = function () {
        todoFactory.deleteAll();
        $scope.todos = todoFactory.getTodos();
    };
}]);
