import { Component } from '@angular/core';
import { ResourceService } from 'plotter-shell-angular2/dist/index';
import { StateTaxesService, IStateInfo } from './stateTaxes.service';

@Component({
    selector: 'v-state-taxes',
    template: `
        <h2>State Taxes</h2>
        <p>US State Names and Average State Income Tax</p>
        <ul>
            <li *ngFor="let state of states">{{state.name}} [{{state.taxAmount}}]</li>
        </ul>
    `,
    styles: [`
        :host { margin: 5px; }
        h1 { background-color: cadetblue; }
        p { background-color: lightsalmon; }
    `]
})
export class StateTaxesComponent {

    states: IStateInfo[] = [];

    constructor(
        private stateTaxesService: StateTaxesService, 
        public resourceService: ResourceService) {
        let that = this;

        setTimeout(function () {
            that.stateTaxesService.getStates()
                .then(responseJson => {
                    let states = (<any>responseJson).states;
                    that.states.push(...states);
                })
                .catch(err => {
                    alert(`Error retrieving top ten wind farms.\r\n${err}`);
                });
        }, 2000);
    }
}