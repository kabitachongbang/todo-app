angular.module("todo", []);
angular.module("todo").controller("TodoController", TodoController);

TodoController.$inject = ["$scope", "todoService"];

function TodoController($scope, todoService) {
  $scope.todos = [];
  $scope.todoItem = { content: "", isComplete: false };
  loadData();

  $scope.addTodoItem = function() {
    if ($scope.todoItem._id === undefined || $scope.todoItem._id === null) {
      todoService.addItem($scope.todoItem).then(function(result) {
        loadData();
        clearItem();
      });
    } else {
      todoService
        .updateItem($scope.todoItem._id, $scope.todoItem)
        .then(function(result) {
          loadData();
          clearItem();
        });
    }
  };

  $scope.removeTodoItem = function(itemID) {
    todoService.deleteItem(itemID).then(function(successResult) {
      loadData();
    });
  };

  $scope.deleteAllTodos = function(todosList) {
    todosList.forEach(function(item) {
      if (item.isComplete) {
        console.log("to be deleted ", item.isComplete);
        /*  $scope.todos = todoService
          .deleteAllItems()
          .then(function(successResult) {});
       */
      }
    });
  };

  $scope.editTodoItem = function(newItem) {
    $scope.todoItem = newItem;
  };

  $scope.checkAllItems = function(todosList) {
    let uncheckedIDsList = [];
    console.log("all todos", todosList);
    todosList.forEach(function(item) {
      if (!item.isComplete) {
        uncheckedIDsList.push(item._id);
      }
    });

    todoService.checkAllItems(uncheckedIDsList).then(function(successResult) {
      console.log("update all todo list status? ", successResult);
      loadData();
      clearItem();
    });
  };

  $scope.checkTodoItem = function(index) {
    let itemID = $scope.todos[index]._id;
    $scope.todos[index].isComplete = !$scope.todos[index].isComplete;
    todoService
      .checkItem(itemID, $scope.todos[index])
      .then(function(successResult) {
        console.log("update todo item status ", successResult);
        loadData();
        clearItem();
      });
  };

  function loadData() {
    todoService.getItems().then(function(successResult) {
      $scope.todos = successResult;
    });
  }
  function clearItem() {
    $scope.todoItem = {};
  }
}
