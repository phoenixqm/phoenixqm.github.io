'use strict';

angular.module('blogApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/blog/main.html',
    controller: 'BlogHomeListController'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/blog/main.html',
    controller: 'BlogHomeListController'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');



});
