angular.module('shortly.links', [])

.controller('LinksController', function ($scope, links) {
  // Your code here

  console.log('----------------LinksController callback executed!-----------------');

  $scope.data = {};
  $scope.data.links = links;
  // Links.getAll().then(function(links) {
  //   $scope.data.links = links; 
  // });
});