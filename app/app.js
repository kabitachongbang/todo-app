var app = angular.module('todo', []);
app.controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [];
    $scope.todoItem = {
        content: ''
    };
    let indexUpdate = 0;

    $scope.addTodoItem = function () {
        console.log($scope.todoItem);

        if ($scope.todoItem.id === undefined) {

            let todo = {
                id: $scope.todos.length,
                content: $scope.todoItem.content,
                isComplete: false
            };

            $scope.todos.push(todo);
        } else {
            $scope.todos[indexUpdate].content = $scope.todoItem.content;

        }
        $scope.todoItem = {};

    };
    $scope.removeTodoItem = function (index) {
        $scope.todos.splice(index, 1);
    };
    $scope.editTodoItem = function (index) {

        $scope.todoItem = $scope.todos[index];
        indexUpdate = index;
    };
    $scope.checkTodo = function (index) {
        if ($scope.todos[index].isComplete === true) {
            $scope.todos[index].isComplete = false;
            console.log($scope.todos[index].isComplete);
        } else {
            $scope.todos[index].isComplete = true;
            console.log($scope.todos[index].isComplete);
        }
    };
    $scope.checkAll = function () {
        for (let count = 0; count < $scope.todos.length; count++) {


            $scope.todos[count].isComplete = true;

        };
    };

    $scope.clearAll = function () {
        $scope.todos = [];
    };

}]);


