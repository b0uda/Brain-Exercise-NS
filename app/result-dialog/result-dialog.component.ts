import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-result-dialog",
  templateUrl: "./result-dialog.component.html",
  styleUrls: ["./result-dialog.component.scss"]
})
export class ResultDialogComponent implements OnInit {

  @ViewChild("stackLayout") stackLayout: ElementRef;
  score;
  _stackLayout;

  constructor(private params: ModalDialogParams, private routerExtensions: RouterExtensions) {
    this.score = `You have ${params.context.score} good answers`;
  }

  home() {
    console.log("xxxx");
    this.routerExtensions.navigate(["/home"], { clearHistory: false });
    this.params.closeCallback();

  }

  result() {
    this.params.closeCallback();
    this.routerExtensions.navigate(["/home"], { clearHistory: false });
  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _stackLayout = <StackLayout>this.stackLayout.nativeElement;
    _stackLayout.className = _deviceType.toLowerCase();
    console.log(_deviceType);
  }

}
