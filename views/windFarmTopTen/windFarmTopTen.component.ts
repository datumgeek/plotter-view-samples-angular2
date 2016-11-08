import { Component } from '@angular/core';
import { WindFarmService, IWindFarm } from '../windFarm.service';

@Component({
    selector: 'v-wind-farm-top-ten-component',
    template: `
        <h2>Top Ten Wind Farms</h2>
        <p>(From OpenEI)</p>
        <ul>
            <li *ngFor="let farm of farms" (click)="launchWindFarmDetails(farm)">{{farm.Name}}</li>
        </ul>
    `,
    styles: [`
        h1 {
            background-color: cadetblue;
        }

        p {
            background-color: lightsalmon;
        }
    `]
})
export class WindFarmTopTenComponent {

    constructor(private windFarmService: WindFarmService) {
        let that = this;

        setTimeout(function() {
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
        alert(`Launch Details (${farm.Name})`);
    }
}