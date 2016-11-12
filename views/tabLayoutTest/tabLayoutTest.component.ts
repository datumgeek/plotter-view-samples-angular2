import { Component } from '@angular/core';
import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';

@Component({
    selector: 'v-tab-layout-test',
    template: `
        <h2>Tab Layout Test</h2>
        <p-tab-layout [state]="state"></p-tab-layout>
    `,
    styles: [`
        :host { margin: 5px; }
        h1 { background-color: cadetblue; }
        p { background-color: lightsalmon; }
    `]
})
export class TabLayoutTestComponent {

    public reuseTab: boolean = true;

    constructor(
        private shellService: ShellService, 
        public parameterService: ParameterService,
        public resourceService: ResourceService) {
        let that = this;
    }

    state = {
        layout: {
            title: '--- Tab Layout Test ---'
        }
    }
}