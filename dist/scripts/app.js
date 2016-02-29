(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl',
        templateUrl: '/templates/landing.html'
      });
    }

  angular
    .module('myApp', ['ui.router', 'firebase', 'ngMaterial', 'ngMessages'])
    .config(config);
})();


// angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).controller('AppCtrl', function($scope) {
//   $scope.myDate = new Date();
//
//   $scope.minDate = new Date(
//       $scope.myDate.getFullYear(),
//       $scope.myDate.getMonth() - 2,
//       $scope.myDate.getDate());
//
//   $scope.maxDate = new Date(
//       $scope.myDate.getFullYear(),
//       $scope.myDate.getMonth() + 2,
//       $scope.myDate.getDate());
//
//   $scope.onlyWeekendsPredicate = function(date) {
//     var day = date.getDay();
//     return day === 0 || day === 6;
//   }
// });
