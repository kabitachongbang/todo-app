angular.module("todo").factory("todoService", function($http) {
  let myUrl = "http://localhost:3000/api/formData/";
  let getItems = function() {
    return $http({
      url: myUrl,
      method: "GET"
    }).then(
      function(successResult) {
        return successResult.data;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };
  let addItem = function(newItem) {
    return $http({
      url: myUrl,
      method: "POST",
      data: newItem
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  let deleteItem = function(itemId) {
    return $http({
      url: myUrl + itemId,
      method: "DELETE"
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  let updateItem = function(itemId, newItem) {
    return $http({
      url: myUrl + itemId,
      method: "PUT",
      data: newItem
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  let deleteAllItems = function() {
    return $http({
      url: myUrl,
      method: "DELETE"
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  let checkAllItems = function(newItem) {
    return $http({
      method: "PUT",
      url: myUrl + "completeAll",
      data: JSON.stringify(newItem)
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  let checkItem = function(itemID, newItem) {
    return $http({
      method: "PUT",
      url: myUrl + itemID,
      data: newItem
    }).then(
      function(successResult) {
        return successResult;
      },
      function(failedResult) {
        return failedResult;
      }
    );
  };

  return {
    getItems: getItems,
    addItem: addItem,
    deleteItem: deleteItem,
    updateItem: updateItem,
    checkItem: checkItem,
    checkAllItems: checkAllItems,
    deleteAllItems: deleteAllItems
  };
});
