'use strict';

angular.module('responymous')
  .controller('ResponseCtrl', function() {

    var self = this;

    this.poll = {
      "votes":[ 5,5,4,3,4,2,3,3,3,3,5,1,1 ],
      "datetime":"2014-12-03T20:27:48.744Z",
      "class":{
        "name":"FEE",
        "semester":"Fall 2014",
        "instructor":"David Rogers",
        "school":"TIY",
        "location":"Orando"
      }
    }

    this.calcVotes = function(votes){
      //var date = new Date();
      //console.log(JSON.stringify(date));
      var count = { red:0, yellow:0, green:0 };
      votes.forEach(function(element, index, array){
          if (element <= 2){
            count.red = count.red + 1;
          }
          if (element == 3) count.yellow = count.yellow + 1;
          if (element >= 4){
            count.green = count.green + 1;
          }
      });

      var response = [
        { count: count.red,
          percent: ((count.red/votes.length)*100).toFixed(2) },
        { count: count.yellow,
          percent: ((count.yellow/votes.length)*100).toFixed(2) },
        { count: count.green,
          percent: ((count.green/votes.length)*100).toFixed(2) }
      ]


      this.red = response[0].percent;
      this.yellow = response[1].percent;
      this.green = response[2].percent;
      console.log(response);
    }

    self.calcVotes(self.poll.votes);

  })
;
