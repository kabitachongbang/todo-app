var app = angular.module('todo', []);
app.controller('TodoController', ['$scope', 'todoService', function ($scope, todoService) {
    $scope.todos = todoService.getItems();
    $scope.todoItem = { content: '' };

    let updateIndex = 0;

    $scope.addTodoItem = function () {
        if ($scope.todoItem.id === undefined) {
            todoService.addItem($scope.todoItem.content);
            $scope.todos = todoService.getItems();
            console.log($scope.todos)
        }
        else {
            todoService.updateItem(updateIndex, $scope.todoItem);
        }
        $scope.todoItem = {};
    };

    $scope.removeTodoItem = function (index) {
        todoService.deleteItem(index);
    };

    $scope.clearAll = function () {
        $scope.todos = todoService.deleteAll();

    };

    $scope.editTodoItem = function (index) {
        $scope.todoItem = $scope.todos[index];
        updateIndex = index;
    };

    $scope.checkTodoItem = function (index) {
        todoService.checkItem(index);
    };

    $scope.checkAllItems = function () {
        todoService.checkALL();
    };
}]);