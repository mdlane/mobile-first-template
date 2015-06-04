'use strict';
angular.module('tnmap.controllers', []).
  controller('MapControl', ['$scope', 'card',
    function ($scope, card) {
      $scope.card = card;
      $scope.select = card.select;
    }
  ]).
  controller('CardControl', ['$scope', 'card',
    function ($scope, card) {
      $scope.card = card;
      $scope.toggle = card.togglemax;
      $scope.removecard = card.removecard;
    }
  ]);