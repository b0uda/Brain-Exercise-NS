import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { screen } from "platform";

import { RouterExtensions } from "nativescript-angular/router";

import { Image } from "ui/image";
import { Label } from "ui/label";
import { GridLayout } from "ui/layouts/grid-layout";
import { Page } from "ui/page";

import * as dialogs from "ui/dialogs";

import { EventData } from "data/observable";
import { IQuestion, QuestionsService } from "../questions.service";

const tnsfx = require("nativescript-effects");

@Component({
  moduleId: module.id,
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"]
})
export class PlayComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  @ViewChild("questionLabel") questionLabel: ElementRef;
  @ViewChild("image") image: ElementRef;
  router;
  questions: Array<IQuestion>;
  questionCurrent: IQuestion;
  questionIndex;
  score;

  constructor(private routerExtensions: RouterExtensions, private questionService: QuestionsService) {
    this.questions = questionService.questions;
    this.questionIndex = 0;
    this.questionCurrent = this.questions[0];
    this.score = 0;
  }

  pageLoaded() {
    console.log("loaded");
  }

  ngOnInit() {

    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();

    const _questionLabel = <Label>this.questionLabel.nativeElement;
    console.log(<Label>this.questionLabel.nativeElement);
    // _question.top = screen.mainScreen.heightPixels / 4;

    const _questionImg = <Image>this.image.nativeElement;
    // const x = _questionImg.getActualSize().height;

    // Quiz Logic

  }

  nextQuestion(answer: number): void {

    console.log(`index : ${this.questionIndex}
      array length : ${this.questions.length}
    `);

    // if there is next question
    if (this.questionIndex < this.questions.length - 1) {

      // if good answer
      if (this.questionCurrent.a === answer) {
        // console.log("xxx good answer");
        this.score++;
      } else {
        // console.log("xxx bad answer");
      }

      this.questionIndex++;
      this.questionCurrent = this.questions[this.questionIndex];

    } else {
      dialogs.alert(`you have a score of : ${this.score}`).then(() => {
        this.routerExtensions.navigate(["/home"], { clearHistory: false });
      });
    }

  }

}
