import { OnInit, ViewContainerRef } from '@angular/core';
export declare class TreemapComponent implements OnInit {
    chartPlaceholderRef: ViewContainerRef;
    chartElement: HTMLElement;
    formPlaceholderRef: ViewContainerRef;
    formElement: HTMLElement;
    ngOnInit(): void;
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
