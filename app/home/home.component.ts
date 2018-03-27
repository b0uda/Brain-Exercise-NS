import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { RouterExtensions } from "nativescript-angular/router";

import { GridLayout } from "ui/layouts/grid-layout";
import { StackLayout } from "ui/layouts/stack-layout";

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  @ViewChild("containerBtn") containerBtn: ElementRef;
  router;
  stackBtn;

  constructor(private routerExtensions: RouterExtensions) { }

  startAlphabet($event) {
    this.routerExtensions.navigate(["/play"], { clearHistory: false });
  }

  // Change Buttons Layout if orientation Changed
  orientationChangedCallback(args) {
    if (args.landscape) {
      // Do something landscap-y
      console.log("landscape");
      this.stackBtn.orientation = "horizontal";

      return;
    }

    // Do something portrait-y
    // Assume this includes updating boundProperty on this module's scope
    console.log("portrait");
    this.stackBtn.orientation = "vertical";
  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();
    console.log(_deviceType);

    this.stackBtn = <StackLayout>this.containerBtn.nativeElement;

    orientation.addOrientationApplier(this.orientationChangedCallback.bind(this));

  }

}
