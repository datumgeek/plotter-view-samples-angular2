import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
export declare class TabLayoutTestComponent {
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    reuseTab: boolean;
    constructor(shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
    state: {
        layout: {
            title: string;
        };
    };
}
