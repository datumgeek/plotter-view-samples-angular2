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
        function StateTaxesComponent(stateTaxesService, resourceService, shellService) {
            var _this = this;
            this.stateTaxesService = stateTaxesService;
            this.resourceService = resourceService;
            this.shellService = shellService;
            this.states = [];
            this.selectState = function (state) {
                _this.currentState = state;
                _this.shellService.pubSubEventBus.publish('state', { state: state });
            };
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
            var subscription = this.shellService.pubSubEventBus.subscribe('state', function (data) {
                // find the state in our list since it maybe came from somewhere else
                _this.currentState = _this.states.find(function (s) { return s.name === data.state.name; });
            }, function (err) { alert("err: " + JSON.stringify(err)); }, function () { alert("complete."); });
        }
        StateTaxesComponent = __decorate([
            core_1.Component({
                selector: 'v-state-taxes',
                template: "\n        <h2>State Taxes</h2>\n        <p>US State Names and Average State Income Tax</p>\n        <p *ngIf=\"currentState\">Selected: {{currentState.name}}\n        <ul>\n            <li *ngFor=\"let state of states\" [class.selected]=\"state === currentState\" (click)=\"selectState(state)\">{{state.name}} [{{state.taxAmount}}]</li>\n        </ul>\n    ",
                styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n        li:hover { background-color: lightyellow; }\n        .selected { background-color: lightsalmon; }\n        li.selected:hover { background-color: lightsalmon; }\n    "]
            }), 
            __metadata('design:paramtypes', [stateTaxes_service_1.StateTaxesService, index_1.ResourceService, index_1.ShellService])
        ], StateTaxesComponent);
        return StateTaxesComponent;
    }());
    exports.StateTaxesComponent = StateTaxesComponent;
});
//# sourceMappingURL=stateTaxes.component.js.map