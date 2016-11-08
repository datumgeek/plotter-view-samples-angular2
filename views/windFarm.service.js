var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var WindFarmService = (function () {
        function WindFarmService() {
            this.windFarms = [
                { Name: 'Green Ridge Power', TurbineCount: 1476, Description: 'The Green Ridge Power wind farm has...' },
                { Name: 'Lake Erie Alternative', TurbineCount: 1400, Description: 'The Lake Erie Alternative wind farm has...' },
                { Name: 'Wind Power Partners', TurbineCount: 967, Description: 'The Wind Power Partners wind farm has...' },
                { Name: 'Solano County', TurbineCount: 600, Description: 'The Solano Country wind farm has...' },
                { Name: 'Zond-PanAero Windsystems', TurbineCount: 460, Description: 'The Zond-PanAero Windsystems wind farm has...' },
                { Name: 'Radial Wind Farm', TurbineCount: 390, Description: 'The Radial Wind Farm has...' },
                { Name: 'Apex Offshore Phase 2', TurbineCount: 360, Description: 'The Apex Offshore Phase 2 wind farm has...' },
                { Name: 'Sky River Wind Farm', TurbineCount: 342, Description: 'The Sky River Wind Farm has ...' },
                { Name: 'Patterson Pass Wind Farm', TurbineCount: 336, Description: 'The Patterson Pass Wind Farm has...' },
                { Name: 'Hartland Wind Farm', TurbineCount: 333, Description: 'The Hartland Wind Farm has...' }
            ];
        }
        WindFarmService.prototype.getWindFarmTopTen = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                resolve(_this.windFarms);
            });
        };
        WindFarmService.prototype.getWindFarm = function (name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var farm = _this.windFarms.find(function (f) { return f.Name === name; });
                if (farm) {
                    resolve(farm);
                }
                else {
                    reject("Wind farm ('" + name + "') not found.");
                }
            });
        };
        WindFarmService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], WindFarmService);
        return WindFarmService;
    }());
    exports.WindFarmService = WindFarmService;
});
//# sourceMappingURL=windFarm.service.js.map