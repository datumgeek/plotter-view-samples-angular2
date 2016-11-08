export declare class WindFarmService {
    private windFarms;
    getWindFarmTopTen(): Promise<IWindFarm[]>;
    getWindFarm(name: string): Promise<IWindFarm>;
}
export interface IWindFarm {
    Name: string;
    TurbineCount?: number;
    Description?: string;
}
