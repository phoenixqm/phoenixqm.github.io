angular.module('blogApp').controller('BlogPrimaryController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogPrimary', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/primary.html',
    controller: 'BlogPrimaryController'
  };
});
