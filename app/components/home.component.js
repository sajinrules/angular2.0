System.register(['angular2/core', 'angular2/router', '../directives/hover', './todo.component', './components.component'], function(exports_1, context_1) {
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
    var core_1, router_1, hover_1, todo_component_1, components_component_1;
    var HomePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hover_1_1) {
                hover_1 = hover_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (components_component_1_1) {
                components_component_1 = components_component_1_1;
            }],
        execute: function() {
            /*let template = require('templates/login.html');*/
            /*@Component({
                selector: 'home-page',
            })*/
            /*@Directive({
              selector:'[HoverComponent]'
            }) */
            /*@View({
                templateUrl: 'app/templates/home.html'
            })*/
            HomePageComponent = (function () {
                function HomePageComponent(router) {
                    this.router = router;
                }
                HomePageComponent.prototype.onClick = function (event) {
                    console.log("event:", event);
                };
                HomePageComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        templateUrl: 'app/templates/home.html',
                        directives: [hover_1.HoverComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/todo', name: 'Todo', component: todo_component_1.todoPageComponent, useAsDefault: true }),
                        new router_1.Route({ path: '/components', name: 'Components', component: components_component_1.componentPageComponent })
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomePageComponent);
                return HomePageComponent;
            }());
            exports_1("HomePageComponent", HomePageComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map