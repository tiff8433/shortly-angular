angular.module('shortly.services', [])

.factory('Links', function ($http) {
  //will fetch all links
  var getLinks = function(link) {
    return $http({
      method: 'GET',
      url: '/api/links',
      data: link
    }).then(function(resp){
      //responding with data
      return resp.data;
    });
  };
  //sending link to DB
  var addLink = function(url){ //passing in a url
    return $http({
      method: 'POST',
      url: '/api/links',
      data: url // {url: 'http://example.com'} -- server is looking for url objects
    });
  };
  //return both of these function so they can be used in any controller
  return {
    getLinks: getLinks,
    addLink: addLink
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
