import { ShellService } from 'plotter-shell-angular2/dist/index';
import { WindFarmService, IWindFarm } from '../windFarm.service';
export declare class WindFarmTopTenComponent {
    private windFarmService;
    private shellService;
    reuseTab: boolean;
    constructor(windFarmService: WindFarmService, shellService: ShellService);
    farms: IWindFarm[];
    launchWindFarmDetails(farm: {
        Name: string;
    }): void;
}
