/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_service_1 = require('./app.service');
var home_1 = require('./home');
var router_active_1 = require('./router-active');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
        this.loading = false;
        this.name = 'Dashboard';
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [],
            directives: [router_active_1.RouterActive],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <span router-active>\n      <button [routerLink]=\" ['Index'] \">\n        Index\n      </button>\n    </span>\n    <span router-active>\n      <button [routerLink]=\" ['Home'] \">\n        Home\n      </button>\n    </span>\n    <span router-active>\n      <button [routerLink]=\" ['About'] \">\n        About\n      </button>\n    </span>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
            { path: '/home', name: 'Home', component: home_1.Home },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', name: 'About', loader: function () { return require('es6-promise!./about')('About'); } }
        ]), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.component.js.map