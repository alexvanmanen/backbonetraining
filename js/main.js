// const Person = Backbone.Model.extend({
//     validate: function (attributes) {
//         if(!attributes.surname) {
//             return "surname is required";
//         }
//     }
// });
// // let backbonePerson = new Person();
// // backbonePerson.set("name", "Alex");
// // backbonePerson.set("surname", "van Manen");
// //
// // console.log(backbonePerson.get("name"));
// // console.log(backbonePerson.attributes);
//
// let simplePerson = {};
// simplePerson.name="Alex";
// simplePerson.surname="van Manen";
//
// let backbonePerson = new Person(simplePerson);
// console.log(simplePerson);
//
// backbonePerson.clear();
// console.log(backbonePerson);
// console.log(backbonePerson.isValid());

var Todo = Backbone.Model.extend({
    urlRoot: "https://jsonplaceholder.typicode.com/todos"
});
//
// var todo = new Todo({id: 1});
// todo.fetch();
//
// todo.set("title", "andere titel");
// todo.save();
// console.log(todo);
// todo.destroy();
//
//
// var todo = new Todo({title:"nieuwe todo"});
// todo.save();

var Todos = Backbone.Collection.extend({
    url: "https://jsonplaceholder.typicode.com/todos",
    model: Todo
});

// var todos = new Todos();
// todos.fetch({
//     success: function () {
//         todos.forEach(function (todo) {
//             console.log(todo.get("title"));
//         })
//     },
//     error: () => console.log("ging mis")
// });

// todos.fetch().then(
//     mijnTodos => mijnTodos.forEach(todo =>console.log(todo.title)),
//     reason => console.log("ging fout, omdat " + reason.status)
// );

var TodoView = Backbone.View.extend({
        tagName: "div",
        render: function () {
            //document.getElementById("todo").innerHTML="sdjkdsfjkl";
            //$("#todo").html("sdfjkdfsjk");
            this.$el.html('test');
            return this;
        }
    }
);

let todoView = new TodoView();
$('#todo').html(todoView.render().$el);