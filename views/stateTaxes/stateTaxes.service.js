var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "plotter-shell-angular2", "@angular/http", "rxjs/Rx"], function (require, exports, core_1, plotter_shell_angular2_1, http_1) {
    "use strict";
    var StateTaxesService = (function () {
        function StateTaxesService(http, resourceService) {
            var _this = this;
            this.http = http;
            this.resourceService = resourceService;
            this.getStates = function () {
                var that = _this;
                return new Promise(function (resolve, reject) {
                    that.http.get(_this.baseUrl + "/views/stateTaxes/stateTaxes.json")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (err) {
                        reject(new Error("getStates failed: reason: \r\n\r\n" + err));
                    });
                });
            };
            this.baseUrl = this.resourceService.resources['plotter-view-samples-angular2'];
        }
        return StateTaxesService;
    }());
    StateTaxesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, plotter_shell_angular2_1.ResourceService])
    ], StateTaxesService);
    exports.StateTaxesService = StateTaxesService;
});
//# sourceMappingURL=stateTaxes.service.js.map