import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { RouterExtensions } from "nativescript-angular/router";

import { Image } from "ui/image";
import { Label } from "ui/label";
import { GridLayout } from "ui/layouts/grid-layout";

import { EventData } from "data/observable";

@Component({
  moduleId: module.id,
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"]
})
export class PlayComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  @ViewChild("label") label: ElementRef;
  @ViewChild("image") image: ElementRef;
  router;

  constructor(private routerExtensions: RouterExtensions) {

  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();


    const _question = <Label>this.label.nativeElement;
    console.log(<Label>this.label.nativeElement);
    _question.left = 100;

    const _questionImg = <Image>this.image.nativeElement;
    const x = _questionImg.getLocationOnScreen;
    console.log("coordinate : " + x);

  }

}
