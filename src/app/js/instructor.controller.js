angular.module('responymous')
  .controller('InstructorCtrl', function( Auth, Firebase, $timeout, $firebase ) {
    var self = this;
    var userID, classID;

    Auth.onAuth(function(user){
      userID = user.$id;
      classID = user.current_class;
    });

    var classUser = $firebase(Firebase 
      .child('classUsers').child(classID)
    ).$asObject();

    classUser.$loaded().then(function(){
      var r=0, y=0, g=0;
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
      console.log(r,y,g);
      this.cntRed = r;
      this.cntYellow = y;
      this.cntGreen = g;
      this.wthRed = ((r/r+y+g)*100).toFixed(2);
      this.wthYellow = ((y/r+y+g)*100).toFixed(2);
      this.wthGreen = ((g/r+y+g)*100).toFixed(2);
    });
  })
;
