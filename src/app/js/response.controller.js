angular.module('responymous')
  .controller('ResponseCtrl', function( CONFIG) {
    var ref = new Firebase(CONFIG.Firebase.baseUrl);
    var self = this;
    // *** Get these values dynamically ***
    var userID = "8822941";
    var classID = "Q42014FEEORL";

    this.reset=function(){

      var class_Size = ref.child("classes/"+classID+"/size");
      var class_VoteTotals = ref.child("classes/"+classID+"/vote_totals");
      class_VoteTotals.child("1").transaction(function(){
        return 0;
      });
      class_VoteTotals.child("2").transaction(function(){
        return 0;
      });
      class_VoteTotals.child("3").transaction(function(){
        return 0;
      });
      class_VoteTotals.child("4").transaction(function(){
        return 0;
      });
      class_Size.once("value", function(snap_size){
        class_VoteTotals.child("5").transaction(function(){
          return snap_size.val();
        });
      });
      
    }

    this.addVote=function(selection){

      //Get current date
      var currDate = (new Date()).toISOString().slice(0,10).replace(/-/g,"");

      //Record vote in Firebase
      ref.child("votes").push({
        class_id: classID,
        timestamp: Firebase.ServerValue.TIMESTAMP,
        date: currDate,
        score: selection,
        student_id: userID
      });

      var user_LastVote = ref.child("users/"+userID+"/last_vote");
      var class_VoteTotals = ref.child("classes/"+classID+"/vote_totals");

      user_LastVote.once("value", function(snap_user){
        class_VoteTotals.once("value", function(snap_class){

           var class_LastVote = class_VoteTotals.child(snap_user.val());

           class_LastVote.transaction(function(snap_lastVote){

             //Decrements class tally for user last vote
             return snap_lastVote - 1;
           });

           var class_CurrVote = class_VoteTotals.child(selection);
           class_CurrVote.transaction(function(snap_currVote){

             //Increments class tally for user selection
             return snap_currVote + 1;
           });

           //Updates user last vote
           user_LastVote.set(selection);
         })
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });


      class_VoteTotals.on('child_changed', function(snap_voteChanged) {
        class_VoteTotals.child("1").once("value", function(snap_1s){
          class_VoteTotals.child("2").once("value", function(snap_2s){
            red = snap_1s.val() + snap_2s.val();
          });
        });

        class_VoteTotals.child("3").once("value", function(snap_3s){
          yellow = snap_3s.val();
        });

        class_VoteTotals.child("4").once("value", function(snap_4s){
          class_VoteTotals.child("5").once("value", function(snap_5s){
            green = snap_4s.val() + snap_5s.val();
          });
        });

        var total = red + yellow + green;
        var progress = [
          { count: red,
            percent: ((red/total)*100).toFixed(2) +'%' },
          { count: yellow,
            percent: ((yellow/total)*100).toFixed(2) +'%' },
          { count: green,
            percent: ((green/total)*100).toFixed(2) +'%' }
        ]

        $('#red').width(progress[0].percent).children('div').text(progress[0].count);
        $('#yellow').width(progress[1].percent).children('div').text(progress[1].count);
        $('#green').width(progress[2].percent).children('div').text(progress[2].count);

      });
   }
})
;
