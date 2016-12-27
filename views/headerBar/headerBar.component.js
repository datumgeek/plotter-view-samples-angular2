var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "plotter-shell-angular2"], function (require, exports, core_1, plotter_shell_angular2_1) {
    "use strict";
    var HeaderBarComponent = (function () {
        function HeaderBarComponent(shellService, parameterService, resourceService) {
            this.shellService = shellService;
            this.parameterService = parameterService;
            this.resourceService = resourceService;
            this.pParentVisible = true;
            this.reuseTab = true;
            var that = this;
        }
        return HeaderBarComponent;
    }());
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderBarComponent.prototype, "state", void 0);
    __decorate([
        core_1.Input('p-parent-visible'),
        __metadata("design:type", Boolean)
    ], HeaderBarComponent.prototype, "pParentVisible", void 0);
    HeaderBarComponent = __decorate([
        core_1.Component({
            selector: 'v-header-bar',
            template: "\n        <h2>HeaderBar Test</h2>\n    ",
            styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
        }),
        __metadata("design:paramtypes", [plotter_shell_angular2_1.ShellService,
            plotter_shell_angular2_1.ParameterService,
            plotter_shell_angular2_1.ResourceService])
    ], HeaderBarComponent);
    exports.HeaderBarComponent = HeaderBarComponent;
});
//# sourceMappingURL=headerBar.component.js.map