import { OnInit, ViewContainerRef } from '@angular/core';
export declare class SunburstComponent implements OnInit {
    chartPlaceholderRef: ViewContainerRef;
    chartElement: HTMLElement;
    formPlaceholderRef: ViewContainerRef;
    formElement: HTMLElement;
    x: any;
    y: any;
    radius: any;
    node: any;
    path: any;
    partition: any;
    arc: any;
    ngOnInit(): void;
    stash(d: any): void;
    arcTweenData(that: SunburstComponent, a: any, i: any): (t: any) => any;
    arcTweenZoom(that: SunburstComponent, d: any): (d: any, i: any) => (t: any) => any;
    click(that: SunburstComponent, d: any): void;
    getData(): {
        "name": string;
        "children": {
            "name": string;
            "children": ({
                "name": string;
                "children": ({
                    "name": string;
                    "size": number;
                } | {
                    "name": string;
                    "children": {
                        "name": string;
                        "size": number;
                    }[];
                })[];
            } | {
                "name": string;
                "size": number;
            })[];
        }[];
    };
}
