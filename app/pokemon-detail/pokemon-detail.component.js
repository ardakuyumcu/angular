'use strict';

// Register `pokemonDetail` component, along with its associated controller and template
angular.
  module('pokemonDetail').
  component('pokemonDetail', {
    templateUrl: 'pokemon-detail/pokemon-detail.template.html',
    controller: ['$routeParams', 'Pokemon',
      function PokemonDetailController($routeParams, Pokemon) {
        var self = this;
        self.pokemon = Pokemon.get({pokemonId: $routeParams.pokemonId});
      }
    ]
  });
