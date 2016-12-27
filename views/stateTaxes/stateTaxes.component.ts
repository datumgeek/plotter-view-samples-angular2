import { Component } from '@angular/core';
import { ResourceService, ShellService } from 'plotter-shell-angular2';
import { StateTaxesService, IStateInfo } from './stateTaxes.service';

@Component({
    selector: 'v-state-taxes',
    template: `
        <h2>State Taxes</h2>
        <p>US State Names and Average State Income Tax</p>
        <p *ngIf="currentState">Selected: {{currentState.name}}
        <ul>
            <li *ngFor="let state of states" [class.selected]="state === currentState" (click)="selectState(state)">{{state.name}} [{{state.taxAmount}}]</li>
        </ul>
    `,
    styles: [`
        :host { margin: 5px; }
        h1 { background-color: cadetblue; }
        p { background-color: lightsalmon; }
        li:hover { background-color: lightyellow; }
        .selected { background-color: lightsalmon; }
        li.selected:hover { background-color: lightsalmon; }
    `]
})
export class StateTaxesComponent {

    states: IStateInfo[] = [];
    currentState: IStateInfo;

    constructor(
        private stateTaxesService: StateTaxesService, 
        public resourceService: ResourceService,
        public shellService: ShellService) {
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

        let subscription = this.shellService.pubSubEventBus.subscribe('state',
            (data) => {
                // find the state in our list since it maybe came from somewhere else
                this.currentState = this.states.find(s => s.name === data.state.name);
            },
            (err) => { alert(`err: ${JSON.stringify(err)}`)},
            () => { alert(`complete.`)});
    }

    selectState = (state: IStateInfo) => {
        this.currentState = state;
        this.shellService.pubSubEventBus.publish('state', { state: state });
    }
}
