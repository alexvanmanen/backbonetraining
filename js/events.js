let person = {
    name: 'Remy',
    age: 33,
    speed: 4,
    walking: function (){
        this.trigger('trigger')
    }
}

_.extend(person, Backbone.Events);

person.on('trigger', function () { console.log('hallo functieee') });


