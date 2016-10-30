import { OnInit } from '@angular/core';
export declare class TreemapComponent implements OnInit {
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
