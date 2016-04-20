System.register(['angular2/core', 'angular2/router', './LoggedInOutlet', './login.component', './register.component', './home.component', '../services/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, LoggedInOutlet_1, login_component_1, register_component_1, home_component_1, auth_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (LoggedInOutlet_1_1) {
                LoggedInOutlet_1 = LoggedInOutlet_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, _authService) {
                    this.router = router;
                    this._authService = _authService;
                    this.isLoggedIn = false;
                    this._authService = _authService;
                    this.router = router;
                }
                AppComponent.prototype.logout = function () {
                    /*console.log("logout");*/
                    this._authService.setStatus(false);
                    /*console.log("this.router:",this.router);*/
                    this.router.navigateByUrl('/');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [auth_service_1.authService]
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES, LoggedInOutlet_1.LoggedInRouterOutlet],
                        templateUrl: 'app/templates/navbar.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.LoginPageComponent, useAsDefault: true },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterPageComponent },
                        { path: '/home/...', name: 'Home', component: home_component_1.HomePageComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.authService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map