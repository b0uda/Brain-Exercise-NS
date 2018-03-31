import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: "app-result-dialog",
  templateUrl: "./result-dialog.component.html",
  styleUrls: ["./result-dialog.component.scss"]
})
export class ResultDialogComponent implements OnInit {

  score;

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
    this.routerExtensions.navigate(["/play"], { clearHistory: false });
  }

  ngOnInit() { }

}
