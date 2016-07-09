angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here
  // $scope.data = Links.getAll();
  // or maybe
  $scope.data = {};

  Links.getAll().then(function(links) {
    // isAuth somehow gets fired
    // if (!Auth.isAuth()) {
    //   $location.path('/signin');
    // } else {
    $scope.data.links = links; 
    // }
  });
});