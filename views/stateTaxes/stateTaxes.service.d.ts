import { ResourceService } from 'plotter-shell-angular2/dist/index';
import { Http } from '@angular/http';
import 'rxjs/Rx';
export declare class StateTaxesService {
    private http;
    private resourceService;
    baseUrl: string;
    constructor(http: Http, resourceService: ResourceService);
    getStates: () => Promise<string>;
}
export interface IStateInfo {
    name: string;
    abbreviation: string;
    taxAmount: number;
}
