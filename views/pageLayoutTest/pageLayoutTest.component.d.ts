import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
export declare class PageLayoutTestComponent {
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    reuseTab: boolean;
    constructor(shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
}
