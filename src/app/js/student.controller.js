'use strict';

angular.module('responymous')
 .controller('StudentCtrl', function(Firebase, $timeout, $firebase) {

  var self = this;

  this.isDisabled = false;

  this.addVote=function(selection){

    this.isDisabled = true;

    //Get current date
    var currDate = (new Date()).toISOString().slice(0,10).replace(/-/g,"");

    // *** Need to get these values dynamically ***
    var userID = "8822941";
    var classID = "Q42014FEEORL";

    var vote = $firebase(Firebase
      .child('votes')
    ).$asArray();

    vote.$add({
      class_id: classID,
      date: currDate,
      score: selection,
      student_id: userID
    });

    var user = $firebase(Firebase
      .child('users').child(userID)
    ).$asObject();

    user.$loaded().then(function(){
      user.last_vote = selection;
      user.$save();
    });

    var user2 = $firebase(Firebase
      .child('users')
    ).$asObject();

    $timeout(function(){
      self.isDisabled=false;
    }, 3000);

  };
})
;
