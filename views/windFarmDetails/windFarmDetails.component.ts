import { Component, Input } from '@angular/core';
import { WindFarmService, IWindFarm } from '../windFarm.service';

@Component({
    selector: 'v-wind-farm-details',
    template: `
        <h2>Wind Farm Details</h2>
        <div *ngIf="farm">
            <h3>{{farm.Name}}</h3>
            <p><b>{{farm.Name}}</b> has {{farm.TurbineCount | number}} wind turbine<span *ngIf="farm.TurbineCount !== 1">s</span>.</p>
            <p>{{farm.Description}}
        </div>
    `,
    styles: [`
        h1 {
            background-color: cadetblue;
        }

        p {
            background-color: white;
        }
    `]
})
export class WindFarmDetailsComponent {

    farm: IWindFarm = null;

    constructor(private windFarmService: WindFarmService) {}
    
    setDynState(state: any) {
        if (state && state.name) {
            this.windFarmService.getWindFarm(state.name)
                .then((farm: IWindFarm) => {
                    this.farm = farm;
                })
                .catch((err: any) => {
                    alert(`Error retrieving wind farm\r\n${err}`);
                });
        }
    }

}