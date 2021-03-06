
angular.module('blogApp').controller('BlogSecondaryController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogSecondary', function LayoutFooter() {
  return {
    restrict: 'EA', replace: true,
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
    restrict: 'EA', replace: true,
    scope: {},
    templateUrl: 'components/aside/search.html',
    controller: 'SearchController'
  };
});



angular.module('blogApp').directive('blogAvatar', function LayoutFooter() {
  return {
    restrict: 'EA', replace: true,
    scope: {},
    templateUrl: 'components/aside/avatar.html'

  };
});


angular.module('blogApp').directive('blogSocial', function LayoutFooter() {
  return {
    restrict: 'EA', replace: true,
    scope: {},
    templateUrl: 'components/aside/social.html'

  };
});


angular.module('blogApp').controller('CategoriesController', function LayoutFooterCtrl($scope) {
  var vm = $scope.vm = {};

});
angular.module('blogApp').directive('blogCategories', function LayoutFooter() {
  return {
    restrict: 'EA', replace: true,
    scope: {},
    templateUrl: 'components/aside/categories.html',
    controller: 'CategoriesController'
  };
});

angular.module('blogApp').directive('blogLicense', function LayoutFooter() {
  return {
    restrict: 'EA', replace: true,
    scope: {},
    templateUrl: 'components/aside/license.html'

  };
});
