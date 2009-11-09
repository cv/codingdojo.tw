$(function() {

  function runTests(name, tests) {
    fireunit.log(name + ":");
    for(t in tests) {
      if(typeof tests[t] === "function") {
        fireunit.log("it " + t + ":");
        tests[t].apply(this, [fireunit]);
      } else if(typeof tests[t] === "object") {
        runTests("Describing " + t, tests[t]);
      } else {
        fireunit.ok(false, "What? Test '" + t + "' is defined as a " + typeof(tests[t]));
      }
    }
  }

  if(typeof fireunit === "object") {
    runTests("Describing the global namespace", tests);
    fireunit.testDone();
  }
});
