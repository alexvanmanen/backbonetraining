
let MovieCollectionView = Backbone.View.extend({
    render: function () {
        let self = this;
        this.model.each(function(movie) {
         let movieView = new MovieView({model: movie});
         self.$el.append(movieView.render().$el)
        });
    }
});
let ActorCollectionView = Backbone.View.extend({
    render: function () {
        let self = this;
        this.model.each(function(actor) {
            let actorView = new ActorView({model: actor});
            self.$el.append(actorView.render().$el)
        });
    }
});
let MovieView = Backbone.View.extend({
    render: function () {
        this.$el.html('<strong>'+this.model.get("title")+ '</strong><br>' + this.model.get("Rating") + '\/5' );
        return this;
    }
});
let ActorView = Backbone.View.extend({
    render: function () {
        console.log(this.model);
        this.$el.html('<strong>'+this.model.get("name")+ '</strong><br>' + this.model.get("location") + this.playsIn());
        return this;
    },
    playsIn: async function (){
        let movieCollection = new Movies();

            let henk = await movieCollection.fetch();
        console.log(henk);
            let movies = '';
            this.model.get('playsIn').forEach(function (id){
                movies +=  movieCollection.findWhere({'id':  id });
                return  movieCollection.findWhere({'id':  3 });;
            })
        }

});

let GenresView = Backbone.View.extend({
    render: function () {
        this.$el.html('GenresView');
    }
});
let NotFoundView = Backbone.View.extend({
    render: function () {
        this.$el.html('Hallo je mag hier niet zijn. Niet gevonden.');
    }
});
let Movie = Backbone.Model.extend({})
let Actor = Backbone.Model.extend({})
let Movies = Backbone.Collection.extend({
    model: Movie,
    url: 'imdb/api/movies.json'
})
let Actors = Backbone.Collection.extend({
    model: Actor,
    url: 'imdb/api/actors.json'
})

let movieCollection = new Movies();
let actorCollection = new Actors();



actorCollection.fetch();
movieCollection.fetch();


let AppRouter = Backbone.Router.extend({
    routes: {
        'actors': 'viewActors',
        'movies': 'viewMovies',
        'genres': 'viewGenres',
        '*other': 'defaultRouter',
    },
    clear: function (){
        $('#container').html('');
    },
    viewActors: function() {
        let view = new ActorCollectionView({el: '#container', model:actorCollection});
        this.clear();
        view.render();
    },
    viewMovies: function() {
        let view = new MovieCollectionView({el: '#container', model:movieCollection});
        this.clear();
        view.render();
    },
    // movieView: function() {
    //     let view = new MovieView({el: '#container', model:movieCollection});
    //     view.render();
    // },
    viewGenres: function() {
        let view = new GenresView({el: '#container'});
        view.render();
    },
    defaultRouter: function () {
        let view = new NotFoundView({el: '#container'});
        view.render();
    }

})

let router = new AppRouter();
Backbone.history.start();

let NavView = Backbone.View.extend({
    events:{ 'click':'onClick'},
    onClick: function (e) {
        let $li = $(e.target);
        router.navigate($li.attr('data-url'), {trigger:true})
    }
});
let navView = new NavView({el: '#nav'});