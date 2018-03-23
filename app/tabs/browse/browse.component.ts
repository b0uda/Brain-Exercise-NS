import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as platformModule from "tns-core-modules/platform";
import { GridLayout } from "ui/layouts/grid-layout";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {

    @ViewChild("gridLayout") gridLayout: ElementRef;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        const _deviceType = platformModule.device.deviceType;
        const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();

    }

}
