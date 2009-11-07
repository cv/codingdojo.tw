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
