$(function() {
  
  function runTests(tests) {
    for(t in tests) {
      fireunit.log(t);

      if(typeof tests[t] === "function") {
        tests[t].apply(this, [fireunit]);
      } else if(typeof tests[t] === "object") {
        runTests(tests[t]);
      } else {
        fireunit.ok(false, "What? Test '" + t + "' is defined as a " + typeof(tests[t]));
      }
    }
  }
  
  if(typeof fireunit === "object") {
    runTests(tests);
    fireunit.testDone();
  }
});
