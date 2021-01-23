
const Person = Backbone.Model.extend({});
const PersonView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get("name"));
        return this;
    }
});

let person = new Person({name: "Alex"})
let personView = new PersonView({ el:"#container", model: person});
personView.render();

