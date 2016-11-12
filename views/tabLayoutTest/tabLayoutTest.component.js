var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', 'plotter-shell-angular2/dist/index'], function (require, exports, core_1, index_1) {
    "use strict";
    var TabLayoutTestComponent = (function () {
        function TabLayoutTestComponent(shellService, parameterService, resourceService) {
            this.shellService = shellService;
            this.parameterService = parameterService;
            this.resourceService = resourceService;
            this.reuseTab = true;
            var that = this;
        }
        TabLayoutTestComponent = __decorate([
            core_1.Component({
                selector: 'v-tab-layout-test',
                template: "\n        <h2>Tab Layout Test</h2>\n    ",
                styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
            }), 
            __metadata('design:paramtypes', [index_1.ShellService, index_1.ParameterService, index_1.ResourceService])
        ], TabLayoutTestComponent);
        return TabLayoutTestComponent;
    }());
    exports.TabLayoutTestComponent = TabLayoutTestComponent;
});
//# sourceMappingURL=tabLayoutTest.component.js.map