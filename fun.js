var app = angular.module("occupied", []);

app.controller('light', ['$scope', function($scope) {
  $scope.occupied = "false";
  $scope.status = "No";
  console.log("test controller");

  $scope.changeStatus = function() {
    $scope.occupied = "true";
    $scope.status = "Yes";
  };

}]);