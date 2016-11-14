
angular.module('blogApp').controller('BlogSecondaryController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogSecondary', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/secondary.html',
    controller: 'BlogSecondaryController'
  };
});

angular.module('blogApp').controller('SearchController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogSearch', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'controllers/aside/search.html',
    controller: 'SearchController'
  };
});



angular.module('blogApp').directive('blogAvatar', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'controllers/aside/avatar.html'

  };
});


angular.module('blogApp').directive('blogSocial', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'controllers/aside/social.html'

  };
});


angular.module('blogApp').controller('CategoriesController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogCategories', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'controllers/aside/categories.html',
    controller: 'CategoriesController'
  };
});

angular.module('blogApp').directive('blogLicense', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'controllers/aside/license.html'

  };
});
