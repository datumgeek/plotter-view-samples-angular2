import { WindFarmService, IWindFarm } from '../windFarm.service';
export declare class WindFarmDetailsComponent {
    private windFarmService;
    farm: IWindFarm;
    constructor(windFarmService: WindFarmService);
    setDynState(state: any): void;
}
