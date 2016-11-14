var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../windFarm.service'], function (require, exports, core_1, windFarm_service_1) {
    "use strict";
    var WindFarmDetailsComponent = (function () {
        function WindFarmDetailsComponent(windFarmService) {
            this.windFarmService = windFarmService;
            this.parentVisible = true;
            this.farm = null;
        }
        WindFarmDetailsComponent.prototype.setDynState = function (state) {
            var _this = this;
            if (state && state.name) {
                this.windFarmService.getWindFarm(state.name)
                    .then(function (farm) {
                    _this.farm = farm;
                })
                    .catch(function (err) {
                    alert("Error retrieving wind farm\r\n" + err);
                });
            }
        };
        __decorate([
            core_1.Input('p-parent-visible'), 
            __metadata('design:type', Boolean)
        ], WindFarmDetailsComponent.prototype, "parentVisible", void 0);
        WindFarmDetailsComponent = __decorate([
            core_1.Component({
                selector: 'v-wind-farm-details',
                template: "\n        <h2>Wind Farm Details</h2>\n        <div *ngIf=\"farm\">\n            <h3>{{farm.Name}}</h3>\n            <p><b>{{farm.Name}}</b> has {{farm.TurbineCount | number}} wind turbine<span *ngIf=\"farm.TurbineCount !== 1\">s</span>.</p>\n            <p>{{farm.Description}}\n        </div>\n    ",
                styles: ["\n        h1 {\n            background-color: cadetblue;\n        }\n\n        p {\n            background-color: lightsalmon;\n        }\n    "]
            }), 
            __metadata('design:paramtypes', [windFarm_service_1.WindFarmService])
        ], WindFarmDetailsComponent);
        return WindFarmDetailsComponent;
    }());
    exports.WindFarmDetailsComponent = WindFarmDetailsComponent;
});
//# sourceMappingURL=windFarmDetails.component.js.map