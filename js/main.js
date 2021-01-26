require.config({
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    }
})
define(['app'], function (App) {
    App.initialize();
});

