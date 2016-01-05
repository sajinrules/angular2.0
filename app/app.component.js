System.register(['angular2/core', 'angular2/router', './hero-detail.component', './hero.service', './login.component', './register.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_detail_component_1, hero_service_1, login_component_1, register_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<nav>\n\t\t\t<div class=\"nav-wrapper teal\" >\n\t\t\t\t<a style=\"margin: 0px 20px;\" class=\"brand-logo\">Angular 2.0 Beta</a>\n\t\t\t\t<ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n\t\t\t\t\t<li><a [routerLink]=\"['Login']\">Login</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Register']\">Register</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"container\">\n\t\t\t<router-outlet></router-outlet>\n      \t</div>\n\t",
                        directives: [hero_detail_component_1.HeroDetailComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.LoginPageComponent, useAsDefault: true },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterPageComponent }
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map