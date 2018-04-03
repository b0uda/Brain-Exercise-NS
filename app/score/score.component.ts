import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { IAnswer, QuestionsService } from "../questions.service";

import { ActivatedRoute } from "@angular/router";
const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"]
})
export class ScoreComponent implements OnInit {

  @ViewChild("stackLayout") stackLayout: ElementRef;
  score;
  _stackLayout;

  constructor(
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private questionsService: QuestionsService) {

    this.route.params
      .forEach((params) => {
        this.score = `U have ${params.score} correct answers`;
      });

    console.log(questionsService.playerAnswers);
  }

  home() {
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
  }

  result() {
    // bouda
    this.routerExtensions.navigateByUrl(`/play/${true}`);
    // this.routerExtensions.navigate(["/play", [true, this.playerAnswers]], { clearHistory: true });
  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _stackLayout = <StackLayout>this.stackLayout.nativeElement;
    _stackLayout.className = _deviceType.toLowerCase();
    console.log(_deviceType);


  }

}
