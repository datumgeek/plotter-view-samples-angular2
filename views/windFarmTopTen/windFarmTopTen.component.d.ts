import { WindFarmService, IWindFarm } from '../windFarm.service';
export declare class WindFarmTopTenComponent {
    private windFarmService;
    constructor(windFarmService: WindFarmService);
    farms: IWindFarm[];
    launchWindFarmDetails(farm: {
        Name: string;
    }): void;
}
