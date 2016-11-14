var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', 'plotter-shell-angular2/dist/index', '../windFarm.service'], function (require, exports, core_1, index_1, windFarm_service_1) {
    "use strict";
    var WindFarmTopTenComponent = (function () {
        function WindFarmTopTenComponent(windFarmService, shellService, parameterService, resourceService) {
            this.windFarmService = windFarmService;
            this.shellService = shellService;
            this.parameterService = parameterService;
            this.resourceService = resourceService;
            this.parentVisible = true;
            this.reuseTab = true;
            this.farms = [];
            var that = this;
            setTimeout(function () {
                that.windFarmService.getWindFarmTopTen()
                    .then(function (windFarms) {
                    (_a = that.farms).push.apply(_a, windFarms);
                    var _a;
                })
                    .catch(function (err) {
                    alert("Error retrieving top ten wind farms.\r\n" + err);
                });
            }, 2000);
            that.windFarmService.addNewFarm({
                Name: 'Add-a-farm',
                TurbineCount: 4,
                Description: 'This is the add-a-farm farm...'
            });
        }
        WindFarmTopTenComponent.prototype.launchWindFarmDetails = function (farm) {
            // alert(`Launch Details (${farm.Name})`);
            this.shellService.launchViewInstanceJSON({
                "uniqueId": "vi-07",
                "title": "Wind Farm: " + farm.Name,
                "viewId": "view3",
                "paneType": "main",
                "cmodule": "plotter-view-samples-angular2/views/viewSamples.module",
                "component": "WindFarmDetailsComponent",
                "state": { "name": farm.Name },
                "hideClose": false
            }, this.reuseTab);
        };
        __decorate([
            core_1.Input('p-parent-visible'), 
            __metadata('design:type', Boolean)
        ], WindFarmTopTenComponent.prototype, "parentVisible", void 0);
        WindFarmTopTenComponent = __decorate([
            core_1.Component({
                selector: 'v-wind-farm-top-ten-component',
                template: "\n        <h2>Top Ten Wind Farms</h2>\n        <p>(From OpenEI)</p>\n        <label><input type=\"checkbox\" [(ngModel)]=\"reuseTab\">Reuse Tab</label>\n        <ul>\n            <li *ngFor=\"let farm of farms\" (click)=\"launchWindFarmDetails(farm)\">{{farm.Name}}</li>\n        </ul>\n        <hr />\n        <h2>ParameterService Parameters</h2>\n        <ul>\n            <li *ngFor=\"let item of parameterService.paramArray\">{{item.key}}:{{item.value}}</li>\n        </ul>\n        <hr />\n        <h2>ResourceService Resources</h2>\n        <ul>\n            <li *ngFor=\"let key of resourceService.keys\">{{key}}:{{resourceService.resources[key]}}</li>\n        </ul>\n    ",
                styles: ["\n        :host { margin: 5px; }\n        h1 { background-color: cadetblue; }\n        p { background-color: lightsalmon; }\n    "]
            }), 
            __metadata('design:paramtypes', [windFarm_service_1.WindFarmService, index_1.ShellService, index_1.ParameterService, index_1.ResourceService])
        ], WindFarmTopTenComponent);
        return WindFarmTopTenComponent;
    }());
    exports.WindFarmTopTenComponent = WindFarmTopTenComponent;
});
//# sourceMappingURL=windFarmTopTen.component.js.map