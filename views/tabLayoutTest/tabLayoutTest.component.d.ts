import { OnInit } from '@angular/core';
import { ShellService, ParameterService, ResourceService } from 'plotter-shell-angular2/dist/index';
export declare class TabLayoutTestComponent implements OnInit {
    private shellService;
    parameterService: ParameterService;
    resourceService: ResourceService;
    reuseTab: boolean;
    constructor(shellService: ShellService, parameterService: ParameterService, resourceService: ResourceService);
    state: {
        layout: {
            title: string;
            header: {
                uniqueId: string;
                cmodule: string;
                component: string;
                state: {
                    "name": string;
                };
            };
            activeTab: any;
            tabs: {
                title: string;
                header: {
                    uniqueId: string;
                    cmodule: string;
                    component: string;
                    state: {
                        "name": string;
                    };
                };
            }[];
        };
    };
    ngOnInit(): void;
}
