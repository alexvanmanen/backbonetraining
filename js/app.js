define([
    'underscore',
    'backbone',
    'models/person',
    'views/personView'], function(_, Backbone, Person, PersonView) {

    let initialize = function() {
        let person = new Person({name: "Alex"})
        let personView = new PersonView({ el:"#container", model: person});
        personView.render();
        return PersonView;
    }

    return {
        initialize: initialize
    }

});

