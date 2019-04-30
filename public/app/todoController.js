angular.module("todo", []);
angular.module("todo").controller("TodoController", TodoController);

TodoController.$inject = ["$scope", "todoService"];

function TodoController($scope, todoService) {
  $scope.todos = [];
  $scope.todoItem = { content: "", isComplete: false };

  loadData();

  $scope.addTodoItem = function() {
    if ($scope.todoItem._id === undefined || $scope.todoItem._id === null) {
      console.log($scope.todoItem.content);

      todoService.addItem($scope.todoItem).then(function(result) {
        console.log("after add", $scope.todoItem);
        loadData();
        clearItem();
      });
    } else {
      todoService
        .updateItem($scope.todoItem._id, $scope.todoItem)
        .then(function(result) {
          console.log("item updated", $scope.todoItem);
          loadData();
          clearItem();
        });
    }
  };

  $scope.removeTodoItem = function(itemID) {
    console.log("index is", itemID);
    todoService.deleteItem(itemID).then(function(successResult) {
      console.log("item deleted", successResult);
      loadData();
    });
  };

  $scope.deleteAllTodos = function() {
    $scope.todos = todoService.deleteAllItems().then(function(successResult) {
      console.log("result is", successResult);
    });
  };

  $scope.editTodoItem = function(newItem) {
    console.log("new item is", newItem);
    $scope.todoItem = newItem;
    console.log("value after edit click", $scope.todoItem);
  };

  $scope.checkAllItems = function(allItems) {
    let uncheckedIDsList = [];

    allItems.forEach(function(item) {
      if (item.isComplete === false) {
        uncheckedIDsList.push(item._id);
      }
    });

    todoService.checkAllItems(uncheckedIDsList).then(function(successResult) {
      console.log("all unmark", successResult);
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
        console.log("success", successResult);
        loadData();
        clearItem();
      });
  };

  function loadData() {
    console.log("todos array value", $scope.todos);
    todoService.getItems().then(function(successResult) {
      $scope.todos = successResult;
      console.log("scoped value", $scope.todos);
    });
  }
  function clearItem() {
    $scope.todoItem = {};
  }
}
