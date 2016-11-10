var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', 'plotter-shell-angular2/dist/index', './stateTaxes.service'], function (require, exports, core_1, index_1, stateTaxes_service_1) {
    "use strict";
    var StateTaxesComponent = (function () {
        function StateTaxesComponent(stateTaxesService, resourceService) {
            this.stateTaxesService = stateTaxesService;
            this.resourceService = resourceService;
            this.states = [];
            var that = this;
            setTimeout(function () {
                that.stateTaxesService.getStates()
                    .then(function (responseJson) {
                    var states = responseJson.states;
                    (_a = that.states).push.apply(_a, states);
                    var _a;
                })
                    .catch(function (err) {
                    alert("Error retrieving top ten wind farms.\r\n" + err);
                });
            }, 2000);
        }
        StateTaxesComponent = __decorate([
            core_1.Component({
                selector: 'v-state-taxes',
                template: "\n        <h2>State Taxes</h2>\n        <p>US State Names and Average State Income Tax</p>\n        <ul>\n            <li *ngFor=\"let state of states\">{{state.name}} [{{state.taxAmount}}]</li>\n        </ul>\n    ",
                styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
            }), 
            __metadata('design:paramtypes', [stateTaxes_service_1.StateTaxesService, index_1.ResourceService])
        ], StateTaxesComponent);
        return StateTaxesComponent;
    }());
    exports.StateTaxesComponent = StateTaxesComponent;
});
//# sourceMappingURL=stateTaxes.component.js.map