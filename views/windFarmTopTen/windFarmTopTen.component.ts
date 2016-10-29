import { Component } from '@angular/core';

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
    public farmes = [
        { Name: 'Green Ridge Power (1476)' },
        { Name: 'Lake Erie Alternative (1400)' },
        { Name: 'Wind Power Partners (967)' },
        { Name: 'Solano County (600)' },
        { Name: 'Zond-PanAero Windsystems (460)' },
        { Name: 'Radial Wind Farm (390)' },
        { Name: 'Apex Offshore Phase 2 (360)' },
        { Name: 'Sky River Wind Farm (342)' },
        { Name: 'Patterson Pass Wind Farm (336)' },
        { Name: 'Hartland Wind Farm (333)' }
    ];

    launchWindFarmDetails(farm: { Name: string }) {
        alert(`Launch Details (${farm.Name})`);
    }
}