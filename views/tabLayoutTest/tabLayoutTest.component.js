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
    var TabLayoutTestComponent = (function () {
        function TabLayoutTestComponent(shellService, parameterService, resourceService) {
            this.shellService = shellService;
            this.parameterService = parameterService;
            this.resourceService = resourceService;
            this.pParentVisible = true;
            this.reuseTab = true;
            this.state = {
                layout: {
                    title: '--- Tab Layout Test :) ---',
                    header: {
                        upHeight: 180,
                        uniqueId: 'x7',
                        cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                        component: "WindFarmDetailsComponent",
                        state: { "name": 'Solano County' }
                    },
                    activeTab: null,
                    tabs: [{
                            title: '--- Tab One ---',
                            header: {
                                upHeight: 180,
                                uniqueId: 'x7',
                                cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                                component: "WindFarmDetailsComponent",
                                state: { "name": 'Zond-PanAero Windsystems' }
                            },
                            tabs: [{
                                    title: '--- Tab a ---',
                                    header: {
                                        upHeight: 180,
                                        uniqueId: 'x7',
                                        cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                                        component: "WindFarmDetailsComponent",
                                        state: { "name": 'Zond-PanAero Windsystems' }
                                    }
                                },
                                {
                                    title: '--- Tab b ---',
                                    header: {
                                        upHeight: 180,
                                        uniqueId: 'x7',
                                        cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                                        component: "WindFarmDetailsComponent",
                                        state: { "name": 'Radial Wind Farm' }
                                    }
                                }]
                        },
                        {
                            title: '--- Tab Two ---',
                            header: {
                                upHeight: 180,
                                uniqueId: 'x7',
                                cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                                component: "WindFarmDetailsComponent",
                                state: { "name": 'Radial Wind Farm' }
                            }
                        }
                    ]
                }
            };
            var that = this;
        }
        TabLayoutTestComponent.prototype.ngOnInit = function () {
            if (this.state.layout.tabs && this.state.layout.tabs.length > 0) {
                this.state.layout.activeTab = this.state.layout.tabs[0];
            }
        };
        return TabLayoutTestComponent;
    }());
    __decorate([
        core_1.Input('p-parent-visible'),
        __metadata("design:type", Boolean)
    ], TabLayoutTestComponent.prototype, "pParentVisible", void 0);
    TabLayoutTestComponent = __decorate([
        core_1.Component({
            selector: 'v-tab-layout-test',
            template: "\n        <p-tab-layout [state]=\"state\" [p-parent-visible]=\"pParentVisible\"></p-tab-layout>\n    ",
            styles: ["\n        :host {\n            display: flex;\n            flex-direction: column;\n            background-color: white;\n            padding: 10px;\n            width: 100%;\n            height: 100%;\n        }\n        :host > p-tab-layout {\n            position: relative;\n            flex: 1 0 auto;\n        }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
        }),
        __metadata("design:paramtypes", [plotter_shell_angular2_1.ShellService,
            plotter_shell_angular2_1.ParameterService,
            plotter_shell_angular2_1.ResourceService])
    ], TabLayoutTestComponent);
    exports.TabLayoutTestComponent = TabLayoutTestComponent;
});
//# sourceMappingURL=tabLayoutTest.component.js.map