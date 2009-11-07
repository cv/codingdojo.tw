$(function() {
  if(typeof fireunit === "object") {
    for(t in tests) {
      fireunit.log(t);
      tests[t].apply(this, [fireunit]);
    }
    fireunit.testDone();
  }
});
