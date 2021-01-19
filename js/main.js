
let PhotoModel = Backbone.Model.extend(
    {
        urlRoot: "https://jsonplaceholder.typicode.com/photos"
    }
);
let PhotoCollection = Backbone.Collection.extend(
    {
        url: "https://jsonplaceholder.typicode.com/photos",
        model: PhotoModel
    }
)

const PhotoView = Backbone.View.extend({
    tagName: 'li',
    open: true,
    events: {
        'click': 'clickFunction',
    },
    initialize: function () {
        this.model.on('add',this.add, this);
    },
    render: function () {
       this.$el.html(this.model.get('title'))
        return this.$el;
    },
    clickFunction:function () {
        console.log(this.open);
        if (this.open) {
            this.$el.append('<ul><li>' + this.model.get('id') + '</li></ul>');
        } else {
            this.render();
        }
        this.open = !this.open;
    },
    add: function (model) {
        alert('HALLO DAARO IK BEN WKAKER');
    }
});

let AlbumView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function () {
        this.collection.on('add',this.add, this);
    },
    add: function (model) {
        this.$el.append(new PhotoView({model:model}).render());
    },
    render: function () {
       
        let that = this;
        this.collection.each(function (photo) {
            let photoView = new PhotoView({ model: photo });
            that.$el.append(photoView.render());
        });
        return this.$el;
    },

});

photoCollection = new PhotoCollection();
photoCollection.fetch({ data: { albumId: 1 } }).then(function () {
        let albumview = new AlbumView({ collection: photoCollection });
        let element = albumview.render();
        console.log(element);
        $("#container").html(element);
    }
    , function () {
        alert('ditgingmis')
    })


