'use strict';

angular.module('responymous', ['ngAnimate', 'ngCookies', 'ngTouch', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/partials/main.html',
      controller: 'MainCtrl'
    })
    .state('student', {
      url: '/student',
      templateUrl: 'app/partials/student.html'
    })
    .state('invite', {
      url: '/invite/student/to/join?class',
      templateUrl: 'app/partials/invite.html',
      controller: 'InviteCtrl'
    })
    .state('instructor', {
      url: '/instructor',
      templateUrl: 'app/partials/instructor.html',
      controller: 'ResponseCtrl'
    });

    $urlRouterProvider.otherwise('/invite');
  })
  .constant('CONFIG', {
    Firebase: {
      baseUrl: 'https://responymousdevdb.firebaseio.com'
    }
  })
;
