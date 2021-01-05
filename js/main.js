console.log("test");
var Person = Backbone.Model.extend({
  initialize: function(){
    console.log("A new person is created");
  }
});

var person = new Person();


var personx = {};
personx.name = "Alex";
console.log(personx);

var Person = Backbone.Model.extend();
var person = new Person();
person.set("name", "Alex");
person.set({
  "surname": "van Manen",
  "age": 36
});

console.log(person);
