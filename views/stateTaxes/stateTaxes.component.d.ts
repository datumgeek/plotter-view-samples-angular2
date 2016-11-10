import { ResourceService } from 'plotter-shell-angular2/dist/index';
import { StateTaxesService, IStateInfo } from './stateTaxes.service';
export declare class StateTaxesComponent {
    private stateTaxesService;
    resourceService: ResourceService;
    states: IStateInfo[];
    constructor(stateTaxesService: StateTaxesService, resourceService: ResourceService);
}
