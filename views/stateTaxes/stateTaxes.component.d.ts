import { ResourceService, ShellService } from 'plotter-shell-angular2';
import { StateTaxesService, IStateInfo } from './stateTaxes.service';
export declare class StateTaxesComponent {
    private stateTaxesService;
    resourceService: ResourceService;
    shellService: ShellService;
    states: IStateInfo[];
    currentState: IStateInfo;
    constructor(stateTaxesService: StateTaxesService, resourceService: ResourceService, shellService: ShellService);
    selectState: (state: IStateInfo) => void;
}
