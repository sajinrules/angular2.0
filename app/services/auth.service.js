System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isLoggedIn;
    return {
        setters:[],
        execute: function() {
            exports_1("isLoggedIn", isLoggedIn = (localStorage.getItem('jwt') !== null));
        }
    }
});
//# sourceMappingURL=auth.service.js.map