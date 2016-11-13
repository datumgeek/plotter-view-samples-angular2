import { Component, OnInit } from '@angular/core';
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
export class TabLayoutTestComponent implements OnInit {

    public reuseTab: boolean = true;

    constructor(
        private shellService: ShellService, 
        public parameterService: ParameterService,
        public resourceService: ResourceService) {
        let that = this;
    }

    state = {
        layout: {
            title: '--- Tab Layout Test ---',
            header: {
                uniqueId: 'x7',
                cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                component: "WindFarmDetailsComponent",
                state: { "name": 'Solano County' }
            },
            activeTab: <any>null,
            tabs: [{
                title: '--- Tab One ---',
                header: {
                    uniqueId: 'x7',
                    cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                    component: "WindFarmDetailsComponent",
                    state: { "name": 'Zond-PanAero Windsystems' }
                }
            }
            , {
                title: '--- Tab Two ---',
                header: {
                    uniqueId: 'x7',
                    cmodule: "plotter-view-samples-angular2/views/viewSamples.module",
                    component: "WindFarmDetailsComponent",
                    state: { "name": 'Radial Wind Farm' }
                }
            }
            ]
        }
    }

    ngOnInit() {
        if (this.state.layout.tabs && this.state.layout.tabs.length > 0) {
            this.state.layout.activeTab = this.state.layout.tabs[0];
        }
    }
}