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
}
