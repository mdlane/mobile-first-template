'use strict';
angular.module('tnmap', [
  'ngRoute',
  'tnmap.services',
  'tnmap.controllers'
]);
'use strict';
angular.module('tnmap.services', []).
  value('version', '1').
  factory('card', ['$document', function($document){
    return {
      'node': angular.element($document[0].getElementsByClassName('map-card')[0]),
      'select': function () {
        this.card.node.removeClass('map-card-max');
        this.card.node.removeClass('map-card-min');
        this.card.node.addClass('map-card-min');
      },
      'togglemax': function () {
        this.card.node.toggleClass('map-card-max');
      },
      'removecard': function (e) {
        this.card.node.removeClass('map-card-max');
        this.card.node.removeClass('map-card-min');
        e.stopPropagation();
      }
    };
  }]);
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