'use strict';

angular.
  module('core.pokemon').
  factory('Pokemon', ['$resource',
    function($resource) {
      return $resource('pokemon/:pokemonId.json', {}, {
        query: {
          method: 'GET',
          params: {pokemonId: 'pokemon'},
          isArray: true
        }
      });
    }
  ]);
