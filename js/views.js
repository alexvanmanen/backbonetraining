let ActorsView = Backbone.View.extend({
    render: function () {
        this.$el.html('ActorsView');
    }
});
let MovieCollectionView = Backbone.View.extend({
    render: function () {
        let self = this;
        this.model.each(function(movie) {
         let movieView = new MovieView({model: movie});
         self.$el.append(movieView.render().$el)
        });
    }
});
let MovieView = Backbone.View.extend({
    render: function () {
        this.$el.html('<strong>'+this.model.get("title")+ '</strong><br>' + this.model.get("Rating") + '\/5' );
        return this;
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
let Movies = Backbone.Collection.extend({
    model: Movie,
    url: 'imdb/api/movies.json'
})

let movieCollection = new Movies();



movieCollection.fetch({success:x });
function x() {
    console.log(movieCollection.where({'id': 1}));
}



let AppRouter = Backbone.Router.extend({
    routes: {
        'actors': 'viewActors',
        'movies': 'viewMovies',
        'genres': 'viewGenres',
        '*other': 'defaultRouter',
    },
    viewActors: function() {
        let view = new ActorsView({el: '#container'});
        view.render();
    },
    viewMovies: function() {
        let view = new MovieCollectionView({el: '#container', model:movieCollection});
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