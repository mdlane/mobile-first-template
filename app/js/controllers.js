'use strict';
angular.module('tnmap.controllers', []).
  controller('MapControl', ['$scope', "leafletBoundsHelpers", 'card',
    function ($scope, leafletBoundsHelpers, card) {
      $scope.card = card;
      $scope.select = card.select;
      angular.extend($scope,
      {
        defaults: {
          zoomControl: false
        },
        bounds: leafletBoundsHelpers.createBoundsFromArray([
          [33.3305, -89.8022],
          [37.6229, -82.5732]
        ]),
        center: {}
      });
      $scope.$on('leafletDirectiveMap.click', function (event) {
        $scope.select();
      });
    }
  ]).
  controller('LocateControl', ['$scope', 'leafletData',
    function ($scope, leafletData) {
      $scope.locate = function () {
        if ($scope.lMap) {
          $scope.lMap.locate({ setView: true, maxZoom: 16 });
        } else {
          console.log('cant get map yet');
        }
      };
      leafletData.getMap().then(function (map) {
        $scope.lMap = map;
      });
    }
  ]).
  controller('CardControl', ['$scope', 'card',
    function ($scope, card) {
      $scope.card = card;
      $scope.toggle = card.togglemax;
      $scope.removecard = card.removecard;
    }
  ]);