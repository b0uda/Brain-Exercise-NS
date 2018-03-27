import { Component,  ElementRef, Input,  OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { RouterExtensions } from "nativescript-angular/router";

import { GridLayout } from "ui/layouts/grid-layout";

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
  moduleId: module.id,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  router ;

  constructor(private routerExtensions: RouterExtensions) { }

  startAlphabet($event) {
    this.routerExtensions.navigate(["/play"], { clearHistory: true });
   }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();
    console.log(_deviceType);
   }

}
