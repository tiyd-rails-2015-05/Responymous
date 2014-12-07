'use strict';

angular.module('responymous')
  .factory('Firebase', function(CONFIG){
    return new Firebase(CONFIG.Firebase.baseUrl);
  })
  .controller('InviteCtrl', function($stateParams,$location) {
    var self = this;

    this.init= function(){
      console.log($stateParams.class);
      if($stateParams.class){
        $location.path('/');
      }
    }
  })
;
