angular.module('xiangmuApp').controller("BarCtrl",["$scope","$http",function ($scope,$http) {
  $scope.labels = ['lnn', 'wyc', 'jgr'];
  $scope.series = ['lnn', 'wyc','jgr'];
  $scope.data = [
    [65, 59, 80],
    [28, 48, 40],
    [30, 60, 80]
  ];
}])
