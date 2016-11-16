import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
import { WindFarmService, IWindFarm } from '../windFarm.service';
export declare class WindFarmTopTenComponent {
    private windFarmService;
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    reuseTab: boolean;
    constructor(windFarmService: WindFarmService, shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
    farms: IWindFarm[];
    launchWindFarmDetails(farm: {
        Name: string;
    }): void;
}
