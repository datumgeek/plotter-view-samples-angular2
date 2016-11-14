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
    var PageLayoutTestComponent = (function () {
        function PageLayoutTestComponent(shellService, parameterService, resourceService) {
            this.shellService = shellService;
            this.parameterService = parameterService;
            this.resourceService = resourceService;
            this.parentVisible = true;
            this.reuseTab = true;
            var that = this;
        }
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], PageLayoutTestComponent.prototype, "state", void 0);
        __decorate([
            core_1.Input('p-parent-visible'), 
            __metadata('design:type', Boolean)
        ], PageLayoutTestComponent.prototype, "parentVisible", void 0);
        PageLayoutTestComponent = __decorate([
            core_1.Component({
                selector: 'v-page-layout-test',
                template: "\n        <h2>Page Layout Test</h2>\n    ",
                styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
            }), 
            __metadata('design:paramtypes', [index_1.ShellService, index_1.ParameterService, index_1.ResourceService])
        ], PageLayoutTestComponent);
        return PageLayoutTestComponent;
    }());
    exports.PageLayoutTestComponent = PageLayoutTestComponent;
});
//# sourceMappingURL=pageLayoutTest.component.js.map