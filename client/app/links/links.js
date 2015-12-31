angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.links;
  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(links){
      //getting link, do what with it? 
      $scope.data.links = links;
      console.log('scope data links', $scope.data.links);
    });
  };
  $scope.getLinks(); 
});
