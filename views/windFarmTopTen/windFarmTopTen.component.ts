import { Component, Input } from '@angular/core';
import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
import { WindFarmService, IWindFarm } from '../windFarm.service';

@Component({
    selector: 'v-wind-farm-top-ten-component',
    template: `
        <h2>Top Ten Wind Farms</h2>
        <p>(From OpenEI)</p>
        <label><input type="checkbox" [(ngModel)]="reuseTab">Reuse Tab</label>
        <ul>
            <li *ngFor="let farm of farms" (click)="launchWindFarmDetails(farm)">{{farm.Name}}</li>
        </ul>
        <hr />
        <h2>ParameterService Parameters</h2>
        <ul>
            <li *ngFor="let item of parameterService.paramArray">{{item.key}}:{{item.value}}</li>
        </ul>
        <hr />
        <h2>ResourceService Resources</h2>
        <ul>
            <li *ngFor="let key of resourceService.keys">{{key}}:{{resourceService.resources[key]}}</li>
        </ul>
    `,
    styles: [`
        :host { margin: 5px; }
        h1 { background-color: cadetblue; }
        p { background-color: lightsalmon; }
    `]
})
export class WindFarmTopTenComponent {

    public reuseTab: boolean = true;

    constructor(
        private windFarmService: WindFarmService, 
        private shellService: ShellService, 
        public parameterService: ParameterService,
        public resourceService: ResourceService) {
        let that = this;

        setTimeout(function () {
            that.windFarmService.getWindFarmTopTen()
                .then(windFarms => {
                    that.farms.push(...windFarms);
                })
                .catch(err => {
                    alert(`Error retrieving top ten wind farms.\r\n${err}`);
                });
        }, 2000);

        that.windFarmService.addNewFarm({
            Name: 'Add-a-farm',
            TurbineCount: 4,
            Description: 'This is the add-a-farm farm...'
        });
    }

    public farms: IWindFarm[] = [];

    launchWindFarmDetails(farm: { Name: string }) {
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
    }
}