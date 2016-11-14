'use strict';

angular.module('app').controller('BlogAppLayoutCtrl', function AppLayoutCtrl($scope, utils) {
  var vm = $scope.vm = {};
  $scope.$on('$stateChangeSuccess', function(event, state) {
    vm.controllerCss = utils.getControllerCss(state.controller);
  });
});
angular.module('app').directive('BlogAppLayout', function appLayout() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/_layout.html',
    controller: 'AppLayoutCtrl'
  };
});
