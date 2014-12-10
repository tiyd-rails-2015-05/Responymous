'use strict';

angular.module('responymous')
 .controller('StudentCtrl', function(Auth, Firebase, $timeout, $firebase, $state) {

  var self = this;

  Auth.onAuth(function(user){

    self.isDisabled = false;

    self.addVote=function(selection){

      var userID = user.$id;
      var classID = user.current_class;

      this.isDisabled = true;

      //Get current date
      var currDate = (new Date()).toISOString().slice(0,10).replace(/-/g,"");

      var vote = $firebase(Firebase
        .child('votes')
      ).$asArray();

      vote.$add({
        class_id: classID,
        date: currDate,
        score: selection,
        student_id: userID
      });

      var classUser = $firebase(Firebase
        .child('classUsers').child(classID).child(userID)
      ).$asObject();

      classUser.$loaded().then(function(){
        classUser.current_vote = selection;
        classUser.$save();
      });

      $timeout(function(){
        self.isDisabled=false;
      }, 3000);

    };

  });


})
;
