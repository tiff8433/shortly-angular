angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log($scope);
  console.log(Links);
  $scope.data = {};
  $scope.data.links;
  $scope.getLinks = function(){
    Links.getLinks()
  }
});
