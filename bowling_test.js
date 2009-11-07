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
*/

var tests = {

  "Should pass" : function(assert) {
    assert.ok(typeof 1 === "number", "1 is a number");
  },

  "Should fail" : function(assert) {
    assert.ok(typeof 1 === "string", "1 is not a string");
  },

}
