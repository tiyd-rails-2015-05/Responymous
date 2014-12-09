angular.module('responymous')
  .factory('ClassVotes', function(){

  })
  .controller('ResponseCtrl', function( Firebase, $timeout, $firebase ) {
    var self = this;

    // *** Get these values dynamically ***
    var classID = "Q42014FEEORL";

    //$$updated



    var user = $firebase(Firebase
      .child('users')
    ).$asObject();

    var r=0, y=0, g=0;
    user.$loaded().then(function(){
      angular.forEach(user, function(value, index){
        if (value.last_vote <= 2){
          r = r + 1;
        }
        if (value.last_vote > 3){
          g = g + 1;
        }
        if (value.last_vote === 3){
          y = y + 1;
        }
      });
      console.log(r,y,g);
    });

    /*var total = red + yellow + green;
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
      */
    });
  })
;
