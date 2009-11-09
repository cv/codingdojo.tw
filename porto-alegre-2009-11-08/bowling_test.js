/*
  fireunit.ok(true, "I'm going to pass!");
  fireunit.ok(false, "I'm going to fail!");
  fireunit.compare(
    "The lazy fox jumped over the log.",
    "The lazy brown fox jumped the log.",
    "Are these two strings the same?"
  );
  fireunit.reCompare(
    "The .* fox jumped the log.",
    "The lazy brown fox jumped the log.",
    "Compare a string using a RegExp."
  );

"should pass" : function(assert) {
  assert.ok(typeof 1 === "number", "1 is a number");
},

"should fail" : function(assert) {
  assert.ok(typeof 1 === "string", "1 is not a string");
},

"SomeObject" : {
  "should have access and visibility controls" : function(assert) {
    var obj = new SomeObject();
    assert.compare(obj.publicMethod(), "some value", "should have access to public methods");
    assert.compare(obj.anotherPublicMethod(3), "some value 3", "public methods should have access to private members");
    assert.compare(typeof obj["privateMember"], "undefined", "private members should not be accessible");
    assert.compare(typeof obj["privateMethod"], "undefined", "private methods should not be accessible");
  }
}


*/

var tests = {

  "should score one frame": function(assert) {
    var b = new BowlingGame();
    b.addFrame(1, 4);
    assert.ok(5 == b.score(), "isScoreOK");
    b.addFrame(4, 5)
    assert.ok(14 == b.score(), "secodScoreOK")
    b.addFrame(6, 4);
    assert.ok(undefined == b.score(), "thirdScoreUndefinedOk");
    b.addFrame(5, 5);
    assert.ok(29 == b.frameScore(2), "thirdScoreAfterSpareOk");
    assert.ok(undefined == b.score(), "fourthScoreUndefinedOk");
    //b.addFrame(10, 0);
    //assert.ok(29 == b.score(), "thirdScoreAfterSpareOk");
  },
  
  "should return if frame is spare" : function(assert) {
    var f = new BowlingFrame(3, 4);
    assert.ok(!f.isSpare(), "notSpareOK");

    f = new BowlingFrame(4, 6);
    assert.ok(f.isSpare(), "spareOK");
    
    f = new BowlingFrame(10, 0);
    assert.ok(f.isSpare(), "strikeIsSpareForNow");
  },
  
  /*
  "should add and score one Frame Ojbect": function(assert){
    var b = new BowlingGame();
    b.addFrame(1,4);
    assert.ok(5 == b.getFrame(0).score(), "isFrameScore")
  },*/
  "should score one Frame Ojbect": function(assert){
    var f = new BowlingFrame(1,4);
    
    assert.ok(5 == f.score(), "isFrameScore");
    var f = new BowlingFrame(5, 5);
    //assert.ok(undefined === f.score(), "scoreUndefined");    
  },
  
  "should return the first throw score": function(assert){
    var f = new BowlingFrame(5,5);
    assert.ok(f.getFirstThrow() === 5, "getFirstThrowOk")
  }
}
