(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/landing',
        controller: 'MainCtrl',
        templateUrl: '/templates/landing.html'
      });
    }

  angular
    .module('myApp', ['ui.router', 'firebase', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .config(config);
})();
