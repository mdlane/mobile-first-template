'use strict';
angular.module('tnmap.services', []).
  value('version', '1').
  value('card', {
    'node': document.getElementsByClassName('map-card')[0],
    'select': function () {
      this.card.node.classList.remove('map-card-max');
      this.card.node.classList.remove('map-card-min');
      this.card.node.classList.add('map-card-min');
    },
    'togglemax': function () {
      this.card.node.classList.toggle('map-card-max');
    },
    'removecard': function (e) {
      this.card.node.classList.remove('map-card-max');
      this.card.node.classList.remove('map-card-min');
      e.stopPropagation();
    }
  });