angular.module('responymous')
  .controller('InstructorCtrl', function( Auth, Firebase, $timeout, $firebase ) {
    var self = this;
    var userID, classID;
    var r,y,g;

    Auth.onAuth(function(user){
      userID = user.$id;
      classID = user.current_class;
    });

    Firebase 
      .child('classUsers')
      .on('child_changed', function(snapshot) {

      var classUser = $firebase(Firebase 
        .child('classUsers').child(classID)
      ).$asObject();

      classUser.$loaded().then(function(){
        r=0;y=0;g=0;
        angular.forEach(classUser, function(value, index){
          if (value.current_vote <= 2){
            r = r + 1;
          }
          if (value.current_vote > 3){
            g = g + 1;
          }
          if (value.current_vote == 3){
            y = y + 1;
          }
        });

        self.cntRed = r;
        self.cntYellow = y;
        self.cntGreen = g;
        total = r+y+g;
        self.wthRed = ((r/total)*100).toFixed(2);
        self.wthYellow = ((y/total)*100).toFixed(2);
        self.wthGreen = ((g/total)*100).toFixed(2);

      });
    });
  })
;
