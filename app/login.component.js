System.register(['angular2/core', './user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1;
    var LoginPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginPageComponent = (function () {
                function LoginPageComponent() {
                    this.submitted = false;
                    this.user = new user_1.User();
                }
                LoginPageComponent.prototype.onSubmit = function () {
                    console.log("this.user:", this.user);
                    this.submitted = true;
                };
                LoginPageComponent = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        template: "\n\t\t<h4>Login</h4>\n\t\t<div class=\"row\">\n\t\t\t<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input type=\"email\" class=\"validate\" [(ngModel)]=\"user.email\" ngControl=\"email\" #email=\"ngForm\" required>\n\t\t\t\t\t\t<label for=\"first_name\">Email</label>\n\t\t\t\t\t\t<div [hidden]=\"email.valid || !email.dirty\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tEmail is required \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input type=\"password\" class=\"validate\" [(ngModel)]=\"user.password\" ngControl=\"password\" #password=\"ngForm\" required>\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<div [hidden]=\"password.valid || !password.dirty\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tPassword is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\"  [disabled]=\"!loginForm.form.valid\">Login\n\t\t\t\t\t<i class=\"material-icons right\">send</i>\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t"
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