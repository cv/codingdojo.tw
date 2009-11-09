/*
SomeObject = function() {
  var privateMember = "some value";
  var privateMethod = function() {
    return privateMember;
  }

  return {
    publicMethod : function() {
      return privateMethod();
    },

    anotherPublicMethod : function(parameter) {
      return privateMember + " " +  parameter;
    }
  }
}
*/
BowlingFrame = function(score1, score2) {

  
   return {
     score1: score1,
     score2: score2,
     
     score: function(){
       /*if (this.isSpare()) {
         return undefined;
       }*/
       return score1 + score2;
     },
     
     getFirstThrow: function(){
       return score1;
     },
     
     isSpare: function() {
       return this.score1 + this.score2 === 10;
     }
   }  
  
}

  BowlingGame = function() {

  
  return {
    frames:new Array(),
    
    
    addFrame: function(score1, score2) {
      var f = BowlingFrame(score1, score2);
      this.frames.push(f);    
    
    },
    
    frameScore: function(index) {
      var totalScore = 0;
      var nextFrame = index + 1 ;
 
      if (this.frames[this.frames.length-1].score() === undefined) {
        return undefined;
      }
      for (var i = 0; i < (nextFrame || this.frames.length); i++) {
        
        if(i > 0 && this.frames[i-1].isSpare()){
          totalScore += this.frames[i].getFirstThrow();
        }
        
        if(i != index) {
          totalScore += this.frames[i].score();
        }
      }
      
      
      
      
      return totalScore;
    },
    score: function() {
      var totalScore = 0;
      
      if (this.frames[this.frames.length-1].isSpare()) {
        return undefined;
      }
      for (var i = 0; i < this.frames.length; i++) {
        totalScore += this.frames[i].score();
      }
      
      
      
      return totalScore;
    }
    
  };
}