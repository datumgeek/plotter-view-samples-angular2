import { Injectable } from '@angular/core';
import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StateTaxesService {

    baseUrl: string;

    constructor(private http: Http, private resourceService: ResourceService) {
        this.baseUrl = (<any>this.resourceService).resources['plotter-view-samples-angular2'];
    }

    getStates = () => {
        let that = this;

        return new Promise<string>((resolve, reject) => {
            that.http.get(`${this.baseUrl}/views/stateTaxes/stateTaxes.json`)
                .map((res: Response) => res.json())
                .subscribe(data => {
                    resolve(data);
                }, err => {
                    reject(new Error(`getStates failed: reason: \r\n\r\n${err}`));
                });
        });

    }
}

export interface IStateInfo {
    name: string;
    abbreviation: string;
    taxAmount: number;
}