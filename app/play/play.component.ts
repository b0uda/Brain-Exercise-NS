import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { screen } from "platform";

import { RouterExtensions } from "nativescript-angular/router";

import { Image } from "ui/image";
import { Label } from "ui/label";
import { GridLayout } from "ui/layouts/grid-layout";
import { Page, Point } from "ui/page";

import * as dialogs from "ui/dialogs";

import { EventData } from "data/observable";
import { IQuestion, QuestionsService } from "../questions.service";

import { GestureEventData, GestureTypes } from "ui/gestures";

import { AnimationCurve } from "ui/enums";

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
  @ViewChild("answerImg0") answerImg0: ElementRef;
  @ViewChild("answerImg1") answerImg1: ElementRef;
  @ViewChild("answerImg2") answerImg2: ElementRef;
  @ViewChild("answerImg3") answerImg3: ElementRef;
  @ViewChild("answerLabel0") answerLabel0: ElementRef;
  @ViewChild("answerLabel1") answerLabel1: ElementRef;
  @ViewChild("answerLabel2") answerLabel2: ElementRef;
  @ViewChild("answerLabel3") answerLabel3: ElementRef;

  answerI0: Image;
  answerI1: Image;
  answerI2: Image;
  answerI3: Image;

  answerL0: Label;
  answerL1: Label;
  answerL2: Label;
  answerL3: Label;

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
    // _question.top = screen.mainScreen.heightPixels / 4;

    const _questionImg = <Image>this.image.nativeElement;
    // const x = _questionImg.getActualSize().height;

    this.answerI0 = <Image>this.answerImg0.nativeElement;
    this.answerI1 = <Image>this.answerImg1.nativeElement;
    this.answerI2 = <Image>this.answerImg2.nativeElement;
    this.answerI3 = <Image>this.answerImg3.nativeElement;
    // console.dir(this.answerI0);
    // Quiz Logic

    this.answerL0 = <Label>this.answerLabel0.nativeElement;
    this.answerL1 = <Label>this.answerLabel1.nativeElement;
    this.answerL2 = <Label>this.answerLabel2.nativeElement;
    this.answerL3 = <Label>this.answerLabel3.nativeElement;

  }

  nextQuestion(eventData: EventData, answer: number): void {

    console.log(`answer ${answer}`);

    switch (answer) {
      case 0:
        this.animateAnswer0();
        break;

      case 1:
        this.animateAnswer1();
        break;

      case 2:
        this.animateAnswer2();
        break;

      case 3:
        this.animateAnswer3();
        break;

      default:
        break;
    }

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

  animateAnswer0() {
    this.answerI0.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 3000);
    this.answerL0.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 3000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 3000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 3000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 3000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 3000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 3000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 3000);

  }

  animateAnswer1() {
    this.answerI1.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 3000);
    this.answerL1.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 3000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 3000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 3000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 3000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 3000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 3000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 3000);

  }

  animateAnswer2() {
    this.answerI2.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 3000);
    this.answerL2.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 3000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 3000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 3000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 3000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 3000);

    this.answerI3.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 3000);
    this.answerL3.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 3000);

  }

  animateAnswer3() {
    this.answerI3.className = "panel_answer animate_bigger";
    setTimeout(() => {
      this.answerI3.className = "panel_answer";
    }, 3000);
    this.answerL3.className = "answer_label animate_bigger";
    setTimeout(() => {
      this.answerL3.className = "answer_label";
    }, 3000);

    this.answerI0.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI0.className = "panel_answer";
    }, 3000);
    this.answerL0.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL0.className = "answer_label";
    }, 3000);

    this.answerI1.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI1.className = "panel_answer";
    }, 3000);
    this.answerL1.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL1.className = "answer_label";
    }, 3000);

    this.answerI2.className = "panel_answer animate_smaller";
    setTimeout(() => {
      this.answerI2.className = "panel_answer";
    }, 3000);
    this.answerL2.className = "answer_label animate_smaller";
    setTimeout(() => {
      this.answerL2.className = "answer_label";
    }, 3000);

  }

}
