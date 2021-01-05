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

fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => console.log(json));


var Todo = Backbone.Model.extend({
  	urlRoot: "https://jsonplaceholder.typicode.com/todos"
});

var todo = new Todo({id: 1});
todo.fetch();
console.log(todo);
