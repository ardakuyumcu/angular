'use strict';

angular.
  module('pokemonShuffleApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/pokemon', {
          template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemon/:pokemonId', {
          template: '<pokemon-detail></pokemon-detail>'
        }).
        otherwise('/pokemon');
    }
  ]);
