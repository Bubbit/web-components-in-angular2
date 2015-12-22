(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>' +
            '<hello-australia-vanilla>' +
                '<hello-hello>' +
                    '<span>Transclude this</span>' +
                '</hello-hello>' +
            '</hello-australia-vanilla>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));