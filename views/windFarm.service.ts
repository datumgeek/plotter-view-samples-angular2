import { Injectable } from '@angular/core';

@Injectable()
export class WindFarmService {

    private windFarms: IWindFarm[] =          [
            { Name: 'Green Ridge Power', TurbineCount: 1476, Description: 'The Green Ridge Power wind farm has...' },
            { Name: 'Lake Erie Alternative', TurbineCount: 1400, Description: 'The Lake Erie Alternative wind farm has...' },
            { Name: 'Wind Power Partners', TurbineCount: 967, Description: 'The Wind Power Partners wind farm has...' },
            { Name: 'Solano County', TurbineCount: 600, Description: 'The Solano Country wind farm has...'},
            { Name: 'Zond-PanAero Windsystems', TurbineCount: 460, Description: 'The Zond-PanAero Windsystems wind farm has...' },
            { Name: 'Radial Wind Farm', TurbineCount: 390, Description: 'The Radial Wind Farm has...' },
            { Name: 'Apex Offshore Phase 2', TurbineCount: 360, Description: 'The Apex Offshore Phase 2 wind farm has...' },
            { Name: 'Sky River Wind Farm', TurbineCount: 342, Description: 'The Sky River Wind Farm has ...' },
            { Name: 'Patterson Pass Wind Farm', TurbineCount: 336, Description: 'The Patterson Pass Wind Farm has...' },
            { Name: 'Hartland Wind Farm', TurbineCount: 333, Description: 'The Hartland Wind Farm has...' }
        ];

    public getWindFarmTopTen(): Promise<IWindFarm[]> {
        return new Promise<IWindFarm[]>((resolve, reject) => {
            resolve(this.windFarms);
        });
    }

    public getWindFarm(name: string): Promise<IWindFarm> {
        return new Promise<IWindFarm>((resolve, reject) => {
            let farm = this.windFarms.find(f => f.Name === name);
            if (farm) {
                resolve(farm);
            } else {
                reject(`Wind farm ('${name}') not found.`);
            }
        }); 
    }

    public addNewFarm(farm: IWindFarm) {
        this.windFarms.push(farm);
    }
}

export interface IWindFarm {
    Name: string;
    TurbineCount?: number;
    Description?: string;
}