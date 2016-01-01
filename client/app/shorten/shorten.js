angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  //creating a function
  $scope.addLink = function(){
    //when ajax request is occuring, it will show the spinner loaded in the 
    //assets file
    // $scope.loading = true; 
    console.log($scope.link, 'scope.link');
    Links.addLink($scope.link)
    .then(function(){
      //stop loading spinner
      // $scope.loading = false; 
      //when server responds correctly, redirect to root of application
      $location.path('/');
    })
    //will console.log error if error occurs
    .catch(function(error){
      console.log(error);
    })
  }
  $scope.name = "ShortenController";
});
