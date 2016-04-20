System.register(['angular2/core', 'angular2/router', './user', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_1, auth_service_1;
    var LoginPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            LoginPageComponent = (function () {
                function LoginPageComponent(router, _authService) {
                    this.router = router;
                    this._authService = _authService;
                    this.submitted = false;
                    this.user = new user_1.User();
                }
                LoginPageComponent.prototype.onSubmit = function () {
                    if (this.user.email === "sajinrules@gmail.com" && this.user.password === "sajin") {
                        this.submitted = true;
                        this._authService.setStatus(true);
                        this.router.parent.navigateByUrl('/home');
                    }
                };
                LoginPageComponent = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        providers: [auth_service_1.authService]
                    }),
                    core_1.View({
                        templateUrl: 'app/templates/login.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.authService])
                ], LoginPageComponent);
                return LoginPageComponent;
            }());
            exports_1("LoginPageComponent", LoginPageComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map