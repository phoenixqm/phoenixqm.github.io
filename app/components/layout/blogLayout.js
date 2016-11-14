'use strict';

angular.module('blogApp').controller('BlogAppLayoutController', function AppLayoutCtrl($scope) {
  var vm = $scope.vm = {};
  $scope.$on('$stateChangeSuccess', function(event, state) {
    // vm.controllerCss = utils.getControllerCss(state.controller);
  });
});
angular.module('blogApp').directive('blogAppLayout', function appLayout() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/bloglayout.html',
    controller: 'BlogAppLayoutController'
  };
});


angular.module('blogApp').controller('BlogFooterController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogFooter', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/blogfooter.html',
    controller: 'BlogFooterController'
  };
});

angular.module('blogApp').controller('BlogHeaderController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogHeader', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/blogheader.html',
    controller: 'BlogHeaderController'
  };
});

