define([
    'jquery',
    'underscore',
    'backbone',
    'models/person'], function($, _, Backbone, Person) {
    const PersonView = Backbone.View.extend({
        render: function() {
            this.$el.html(this.model.get("name"));
            return this;
        }
    });
    return PersonView;
});

