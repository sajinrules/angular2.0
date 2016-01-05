System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoginPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginPageComponent = (function () {
                function LoginPageComponent() {
                }
                LoginPageComponent = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        template: "\n\t\t<h4>Login</h4>\n\t\t<div class=\"row\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\">\n\t\t\t\t\t\t<label for=\"first_name\">Email</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input id=\"password\" type=\"password\" class=\"validate\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginPageComponent);
                return LoginPageComponent;
            })();
            exports_1("LoginPageComponent", LoginPageComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map