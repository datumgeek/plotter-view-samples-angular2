import { Component, Input } from '@angular/core';
import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';

@Component({
    selector: 'v-page-layout-test',
    template: `
        <h2>Page Layout Test</h2>
    `,
    styles: [`
        :host { margin: 5px; }
        h1 { background-color: cadetblue; }
        p { background-color: lightsalmon; }
    `]
})
export class PageLayoutTestComponent {

    @Input() state: any;
    @Input('p-parent-visible') pParentVisible: boolean = true;

    public reuseTab: boolean = true;

    constructor(
        private shellService: ShellService, 
        public parameterService: ParameterService,
        public resourceService: ResourceService) {
        let that = this;
    }
}