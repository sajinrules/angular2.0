System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var auth;
    return {
        setters:[],
        execute: function() {
            exports_1("auth", auth = {
                isLoggedIn: function () {
                    return (localStorage.getItem('jwt'));
                }
            });
        }
    }
});
//# sourceMappingURL=auth.model.js.map