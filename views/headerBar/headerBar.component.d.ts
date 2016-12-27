import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2';
export declare class HeaderBarComponent {
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    state: any;
    pParentVisible: boolean;
    reuseTab: boolean;
    constructor(shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
}
