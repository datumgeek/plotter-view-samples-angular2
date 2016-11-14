import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
export declare class PageLayoutTestComponent {
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    state: any;
    parentVisible: boolean;
    reuseTab: boolean;
    constructor(shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
}
