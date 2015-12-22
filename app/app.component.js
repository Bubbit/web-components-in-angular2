(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>' +
            '<hello-australia-vanilla>' +
                '<hello-hello>' +
                    '<span>{{name}}</span>' +
                '</hello-hello>' +
            '</hello-australia-vanilla>' +
            '<div *ngIf="showInput">' +
                '<input [(ngModel)]="name" type="text">' +
            '</div>'
        })
        .Class({
            constructor: function() {
                var self = this;
                self.name = "Remco";
                self.showInput = false;

                document.addEventListener('name-of-event', function() {
                    self.showInput = !self.showInput;
                });
            }
        });
})(window.app || (window.app = {}));